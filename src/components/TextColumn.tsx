import { View, Text } from 'react-native'
import React from 'react'

export default function TextColumn({ title, value }: { title: string, value: string | number }) {
  return (
    <View className='w-[100%] flex flex-row'>
      <Text className='w-[45%] font-semibold text-[11px] text-slate-800 uppercase'>{title}</Text>
      <Text className='w-[3%] font-semibold text-[11px]'>:</Text>
      <Text className='w-[50%] font-semibold text-[11px] uppercase'>{value}</Text>
    </View>
  )
}