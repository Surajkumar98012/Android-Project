import React from 'react';
import { Image,Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots=({selected})=>{
    let backgroundColor;
    backgroundColor=selected?'rgba(0,0,0,0.8)':'rgba(0,0,0,0.3)'
    return(
        <View
         style={{
             width:5,
             height:5,
             marginHorizontal:3,
             backgroundColor
         }}
        />
    )
  }



const Next=({...props})=>(
    <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
    ><Text style={{fontSize:16}}>Next</Text></TouchableOpacity>
 )

 const Done=({...props})=>(
    <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
    ><Text style={{fontSize:16}}>Done</Text></TouchableOpacity>
 )




const OnboardingScreen=({navigation})=> {
  return (
      <Onboarding
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={()=>navigation.replace('Login')}
        onDone={()=>navigation.navigate('Login')}
        pages={[
            {
                backgroundColor:'#a6e4d0',
                image:<Image source={require('../assets/circle.png')}/>,
                title: 'Connect to the World',
                subtitle: 'A New Way To Connect With The World',
            },
            {
                backgroundColor:'#e9bcbe',
                image:<Image source={require('../assets/circle2.png')}/>,
                title: 'Share Your Favorites',
                subtitle: 'Share Your Thoughts With Similar Kind of People',
            },
            {
                backgroundColor:'#fdeb93',
                image:<Image source={require('../assets/circle3.png')}/>,
                title: 'Become The Star',
                subtitle: "Let The Spot Light Capture You",
            },
        ]}
        />
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});