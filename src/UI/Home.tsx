import { View, Text, ScrollView, SafeAreaView, Image, Platform } from 'react-native'
import React from 'react'
import Plus from "../assets/iconPlus.png"
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useGetAllSchoolList from '../hooks/getSchoolList'
import TextColumn from '../components/TextColumn'
import { SchoolListAttributes } from "../type"
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import iconCard from "../assets/pencils.png"

export default function Home() {
    const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const allSchooList = useGetAllSchoolList(true)
    return (
        <SafeAreaView>
            <ExpoStatusBar backgroundColor='#7c52ee' />
            <ScrollView className={`w-[100%] ${Platform.OS === 'android' ? 'mt-[5%]' : ''}`}>
                <View className='bg-[#7c52ee] py-[3%] px-[2%] flex flex-row items-center justify-between'>
                    <Text className='text-white'>Daftar Sekolah</Text>
                    <View onTouchStart={() => navigate.replace("Form")}>
                        <Image source={Plus} className='w-10 h-10' />
                    </View>
                </View>
                <View className='flex flex-col items-center'>
                    {allSchooList?.data?.data?.map((value: SchoolListAttributes, id: number) => (
                        <View key={id} className='relative border border-slate-300 rounded-md my-[1%] w-[98%] shadow-lg'>
                            <View className='p-[2%] mb-[2%]'>
                                <View className='my-[2%]'>
                                    <Text className='text-xs font-semibold text-center'>{value.province?.name!} / {value?.regency?.name}</Text>
                                </View>
                                <View className='flex flex-row justify-between'>
                                    <View className='w-[70%]'>
                                        <TextColumn title='Kategori' value={value.category} />
                                        <TextColumn title='Nama Sekolah' value={value.name} />
                                        <TextColumn title='Alamat' value={value.address} />
                                        <TextColumn title='Kode Pos' value={value.postal_code} />
                                        <TextColumn title='No Telepon' value={value.phone_number} />
                                        <TextColumn title='Email' value={value.email} />
                                        <TextColumn title='Facebook' value={value.facebook} />
                                        <TextColumn title='Jumlah Siswa' value={value.total_students} />
                                    </View>
                                    <View className='w-[30%] flex justify-center items-center'>
                                        <Image source={iconCard} className='w-20 h-20' />
                                    </View>
                                </View>
                            </View>
                            <View className='w-full h-[4%] bg-sky-700 bottom-0 absolute rounded-b-md'></View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}