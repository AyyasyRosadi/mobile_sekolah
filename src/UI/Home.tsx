import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Plus from "../assets/iconPlus.png"
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useGetAllListSekolah from '../hooks/getListSekolah'
import DaftarSekolahAttributes from '../type'
import Field from '../components/Field'

export default function Home() {
    const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const allSekolah = useGetAllListSekolah(true)
    return (
        <ScrollView>
            <SafeAreaView />
            <View className='w-[100%]'>
                <View className='bg-sky-600 py-[3%] px-[2%] flex flex-row items-center justify-between'>
                    <Text className='text-[30%] text-white'>Daftar Sekolah</Text>
                    <View onTouchStart={() => navigate.replace("Form")}>
                        <Image source={Plus} className='w-10 h-10' />
                    </View>
                </View>
                <View className='flex flex-col items-center'>
                    {allSekolah?.data?.data?.map((value: DaftarSekolahAttributes, id: number) => (
                        <View key={id} className='border border-sky-700 rounded-md my-[1%] w-[98%] p-[2%]'>
                            <Field title='Kategori' value={value.kategori} />
                            <Field title='Nama Sekolah' value={value.nama} />
                            <Field title='Alamat' value={value.alamat} />
                            <Field title='Kode Pos' value={value.kode_pos} />
                            <Field title='Provinsi' value={value.provinsi?.nama!} />
                            <Field title='Kabupaten' value={value.kabupaten?.nama!} />
                            <Field title='No Telepon' value={value.no_telepon} />
                            <Field title='Email' value={value.email} />
                            <Field title='Facebook' value={value.facebook} />
                            <Field title='Jumlah Siswa' value={value.jumlah_siswa} />
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}