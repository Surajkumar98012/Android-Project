import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'

const Stack=createStackNavigator

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default AppStack
