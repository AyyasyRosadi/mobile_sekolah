import { View, Text } from 'react-native'
import React from 'react'

export default function Field({title,value}:{title:string,value:string|number}) {
  return (
    <View className='w-[100%] flex flex-row'>
      <Text className='w-[30%] font-semibold text-slate-800 uppercase'>{title}</Text>
      <Text className='w-[5%]'>:</Text>
      <Text className='w-[65%] font-semibold uppercase'>{value}</Text>
    </View>
  )
}