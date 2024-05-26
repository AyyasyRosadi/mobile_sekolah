import { View, Text } from 'react-native'
import React from 'react'

export default function Alert({ show, message, action }: { show: boolean, message: string, action: any }) {
    return (
        <View className={`absolute top-0 w-[100%] h-[100%] flex justify-center items-center ${show ? "z-10" : "z-0"}`}>
            <View className={`w-[90%] h-[20%] bg-sky-600 opacity-100 flex flex-col items-center justify-between p-[5%] ${show ? "scale-100" : "scale-0"} transition-all ease-in-out duration-300`}>
                <Text className='mt-[10%] text-[25%] font-bold text-white text-center'>{message}</Text>
                <View className='bg-white w-[100%] py-[3%] rounded-lg' onTouchStart={action}>
                    <Text className=' text-sky-700 font-bold text-center'>Kembali</Text>
                </View>
            </View>
        </View>
    )
}