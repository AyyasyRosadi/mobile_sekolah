import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import SelectField from '../components/SelectField';
import InputField from '../components/InputField';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from 'react-native';
import useProvinsiOptions from '../options/provinsi';
import useKabupatenOptions from '../options/kabupaten';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Loader from '../components/Loader';
import useAddListSekolah from '../hooks/addListSekolah';
import Alert from '../components/Alert';

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
                kategori: yup.string().required('Kategori sekolah tidak boleh kosong'),
                nama: yup.string().required("Nama sekolah tidak boleh kosong"),
                alamat: yup.string().required("Alamat tidak boleh kosong"),
                kode_pos: yup.number().required("Kode pos tidak boleh kosong"),
                provinsi_id: yup.string().required("Provinsi tidak boleh kosong"),
                kabupaten_id: yup.string().required("Kabupaten tidak boleh kosong"),
                no_telepon: yup.string().required("No telepon tidak boleh kosong"),
                email: yup.string().required("Email tidak boleh kosong"),
                facebook: yup.string().required("Facebook tidak boleh kosong"),
                jumlah_siswa: yup.number().required("Jumlah siswa tidak boleh kosong")
            })
        )
    })
    const provinsi_watch = method.watch('provinsi_id')
    const provinsiList = useProvinsiOptions()
    const kabupatenList = useKabupatenOptions(provinsi_watch, provinsi_watch && provinsi_watch !== "" ? true : false)
    const saveSekolah = useAddListSekolah()
    const submit = () => {
        const data = method.getValues()
        saveSekolah.mutate(data)
    }
    useEffect(() => {
        if (saveSekolah?.data?.status === 200 || saveSekolah?.error?.message) {
            setShowDialog(true)
        }
    }, [saveSekolah?.data?.status, saveSekolah?.error, saveSekolah?.isSuccess])
    return (
        <ScrollView>
            <SafeAreaView />
            <Loader show={saveSekolah?.isPending} />
            <Alert show={showDialog} message={saveSekolah?.data?.data?.message || 'Silahkan periksa kembali data yang dimasukkan'} action={() => {
                setShowDialog(false)
                if (saveSekolah?.data?.status === 200) {
                    navigate.replace("Home")
                }
            }
            } />
            <Text className='mx-3 text-[20%]' onPress={() => navigate.replace("Home")}>Kembali</Text>
            <View className='w-[100%] p-[2%] mb-[20%]'>
                <SelectField method={method} methodName='kategori' title='Pilih Kategori sekolah' options={kategoriSekolahOptions} />
                <InputField method={method} methodName='nama' title="Nama Sekolah" placeholder='Nama Sekolah' />
                <InputField method={method} methodName='alamat' title="Alamat" placeholder='Alamat' />
                <InputField method={method} methodName='kode_pos' title="Kode Pos" placeholder='Kode Pos' keyboard={'number-pad'} />
                <SelectField method={method} methodName='provinsi_id' title='Provinsi' options={provinsiList} />
                <SelectField method={method} methodName='kabupaten_id' title='Kabupaten' options={kabupatenList} />
                <InputField method={method} methodName='no_telepon' title="No Telepon" placeholder='No Telepon' />
                <InputField method={method} methodName='email' title="Email Sekolah" placeholder='Email Sekolah' />
                <InputField method={method} methodName='facebook' title="Facebook" placeholder='Facebook' />
                <InputField method={method} methodName='jumlah_siswa' title="Jumlah Siswa" placeholder='Jumlah Siswa' keyboard={'number-pad'} />
                <Text className={`text-center text-red-700 ${showAlert ? "block" : "hidden"}`}>Data belum lengkap silahkan di cek kembali!</Text>
                <Button title='Simpan' onPress={submit} />
            </View>
        </ScrollView>
    )
}

