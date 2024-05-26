import { View, Text, ScrollView, SafeAreaView, Image, Platform } from 'react-native'
import React from 'react'
import Plus from "../assets/iconPlus.png"
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useGetAllListSekolah from '../hooks/getListSekolah'
import TextColumn from '../components/TextColumn'
import { DaftarSekolahAttributes } from "../type"
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'

export default function Home() {
    const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const allSekolah = useGetAllListSekolah(true)
    return (
        <SafeAreaView>
            <ExpoStatusBar translucent={true} />
            <ScrollView className={`w-[100%] ${Platform.OS === 'android' ? 'mt-[10%]':''}`}>
                <View className='bg-sky-600 py-[3%] px-[2%] flex flex-row items-center justify-between'>
                    <Text className='text-white'>Daftar Sekolah</Text>
                    <View onTouchStart={() => navigate.replace("Form")}>
                        <Image source={Plus} className='w-10 h-10' />
                    </View>
                </View>
                <View className='flex flex-col items-center'>
                    {allSekolah?.data?.data?.map((value: DaftarSekolahAttributes, id: number) => (
                        <View key={id} className='border border-sky-700 rounded-md my-[1%] w-[98%] p-[2%]'>
                            <TextColumn title='Kategori' value={value.category} />
                            <TextColumn title='Nama Sekolah' value={value.name} />
                            <TextColumn title='Alamat' value={value.address} />
                            <TextColumn title='Kode Pos' value={value.postal_code} />
                            <TextColumn title='Provinsi' value={value.provinsi?.name!} />
                            <TextColumn title='Kabupaten' value={value.kabupaten?.name!} />
                            <TextColumn title='No Telepon' value={value.phone_number} />
                            <TextColumn title='Email' value={value.email} />
                            <TextColumn title='Facebook' value={value.facebook} />
                            <TextColumn title='Jumlah Siswa' value={value.total_students} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}