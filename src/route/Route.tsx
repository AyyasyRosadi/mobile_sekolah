import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Form from '../UI/Form'
import Home from '../UI/Home'
import { navigationRef } from './RootNavigation'


export default function Route() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Form' component={Form} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}