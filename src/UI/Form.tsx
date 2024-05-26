import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';
import SelectField from '../components/SelectField';
import InputField from '../components/InputField';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from 'react-native';
import useProvinceOptions from '../options/province';
import useRegencyOptions from '../options/regency';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Loader from '../components/Loader';
import useAddSchoolList from '../hooks/addSchoolList';
import Alert from '../components/Alert';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const kategoriSekolahOptions = [
    { label: "Swasta", value: "Swasta" },
    { label: "Negeri", value: "Negeri" }
]


export default function Form() {
    const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const [showAlert, setShowAlert] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                category: yup.string().required('Kategori sekolah tidak boleh kosong'),
                name: yup.string().required("Nama sekolah tidak boleh kosong"),
                address: yup.string().required("Alamat tidak boleh kosong"),
                postal_code: yup.string().min(5).max(5).required("Kode pos tidak boleh kosong"),
                province_id: yup.string().required("Provinsi tidak boleh kosong"),
                regency_id: yup.string().required("Kabupaten tidak boleh kosong"),
                phone_number: yup.string().required("No telepon tidak boleh kosong"),
                email: yup.string().email("Email harus valid").required("Email tidak boleh kosong"),
                facebook: yup.string().required("Facebook tidak boleh kosong"),
                total_students: yup.number().required("Jumlah siswa tidak boleh kosong")
            })
        )
    })
    const province_watch = method.watch('province_id')
    const provinceList = useProvinceOptions()
    const regencyList = useRegencyOptions(province_watch, province_watch && province_watch !== "" ? true : false)
    const saveSchool = useAddSchoolList()
    const submit = () => {
        const data = method.getValues()
        saveSchool.mutate(data)
    }
    useEffect(() => {
        if (saveSchool?.data?.status === 200 || saveSchool?.error?.message) {
            setShowDialog(true)
        }
    }, [saveSchool?.data?.status, saveSchool?.error, saveSchool?.isSuccess])
    return (
        <SafeAreaView>
            <ExpoStatusBar translucent={true} />
            <ScrollView className={`${Platform.OS === "android" ? "mt-[10%]" : ""}`}>
                <Loader show={saveSchool?.isPending} />
                <Alert show={showDialog} message={saveSchool?.data?.data?.message || 'Silahkan periksa kembali data yang dimasukkan'} action={() => {
                    setShowDialog(false)
                    if (saveSchool?.data?.status === 200) {
                        navigate.replace("Home")
                    }
                }
                } />
                <Text className='mx-3' onPress={() => navigate.replace("Home")}>{'< Kembali'}</Text>
                <View className={`w-[100%] p-[2%] mb-[20%] `}>
                    <SelectField method={method} methodName='category' title='Pilih Kategori sekolah' options={kategoriSekolahOptions} />
                    <InputField method={method} methodName='name' title="Nama Sekolah" placeholder='Nama Sekolah' />
                    <InputField method={method} methodName='address' title="Alamat" placeholder='Alamat' />
                    <InputField method={method} methodName='postal_code' title="Kode Pos" placeholder='Kode Pos' keyboard={'number-pad'} />
                    <SelectField method={method} methodName='province_id' title='Provinsi' options={provinceList} />
                    <SelectField method={method} methodName='regency_id' title='Kabupaten' options={regencyList} />
                    <InputField method={method} methodName='phone_number' title="No Telepon" placeholder='No Telepon' />
                    <InputField method={method} methodName='email' title="Email Sekolah" placeholder='Email Sekolah' />
                    <InputField method={method} methodName='facebook' title="Facebook" placeholder='Facebook' />
                    <InputField method={method} methodName='total_students' title="Jumlah Siswa" placeholder='Jumlah Siswa' keyboard={'number-pad'} />
                    <Text className={`text-center text-red-700 ${showAlert ? "block" : "hidden"}`}>Data belum lengkap silahkan di cek kembali!</Text>
                    <Button title='Submit' onPress={submit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

