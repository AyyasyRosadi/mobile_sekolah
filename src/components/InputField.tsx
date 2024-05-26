import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

const InputField = ({ title, method, methodName, placeholder, keyboard }: { title: string, placeholder: string, method: UseFormReturn<any, any, undefined>, methodName: string, keyboard?: any }) => {
    const { error } = method.getFieldState(methodName)
    return (
        <View className="m-3">
            <Text className="ml-[2px] mb-[6px]">{title}</Text>
            <Controller
                control={method.control}
                name={methodName}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        placeholder={placeholder}
                        className={`py-2 px-1 border-b border-b-slate-400 shadow-lg text-slate-800 rounded-md`}
                        onChangeText={(value: string) => onChange(value)}
                        value={value}
                        keyboardType={keyboard}
                    />
                )}
            />
            <Text className='text-red-700 font-semibold mx-1'>{error ? "Input harus di isi dan sesuai!" : ""}</Text>
        </View>
    )
}

export default InputField