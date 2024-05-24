import { View, Text, useColorScheme, Image } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import React from 'react';
import tw from 'twrnc';

const Login = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  const handleLogin = () => {
    console.log('login');
  };

  return (
    <View style={tw `flex-1 justify-between`} >
      <View style={tw `justify-center items-center`} >
        
        <Image source={require('../../assets/images/chat2.png')} style={tw `w-40 h-40`} />
        <Text style={{...tw `text-lg text-2xl font-bold`,color:theme.colors.text}}>Bienvenue</Text>
      </View>

     

    </View>
  )
}

export default Login;
