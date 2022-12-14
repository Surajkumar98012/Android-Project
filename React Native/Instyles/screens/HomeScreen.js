import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FormButton from '../components/FormButton'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <FormButton buttonTitle='Logout' onPress={()=>{}}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f9fafd',
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        padding: 20,
      },
      text: {
        fontSize: 20,
        color: '#333333',
      },
})
