import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Picker, PickerIOS } from '@react-native-picker/picker'
import { ItemValue } from '@react-native-picker/picker/typings/Picker'
import { Controller, UseFormReturn } from 'react-hook-form'



export default function SelectField({ title, options, method, methodName }: { title: string, options: Array<{ label: string, value: string }>, method: UseFormReturn<any, any, undefined>, methodName: string }) {
    const { error } = method.getFieldState(methodName)
    return (
        <View className='my-3'>
            <Controller
                control={method.control}
                name={methodName}
                render={({ field: { onChange, value } }) => (
                    Platform.OS === "android" ?
                        <Picker
                            selectedValue={value}
                            onValueChange={(data) => {
                                onChange(data)
                            }}
                        >
                            <Picker.Item label={title} value={""} />
                            {options.map((d, id) => (
                                <Picker.Item key={id} label={d.label} value={d.value} />
                            ))}
                        </Picker>

                        :
                        <PickerIOS
                            itemStyle={{ height: 45, fontSize: 12 }}
                            selectedValue={value}
                            onValueChange={(data: ItemValue) => {
                                onChange(data)
                            }}
                        >
                            <PickerIOS.Item value="" label={title} />
                            {options.map((d, id) => (
                                <PickerIOS.Item key={id} label={d.label} value={d.value} />
                            ))}
                        </PickerIOS>
                )}

            />
            <Text className='text-red-700 font-semibold mx-3'>{error ? "Input Harus di isi!" : ""}</Text>
        </View>
    )
}