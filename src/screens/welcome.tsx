import { View, Text, useColorScheme, Image } from 'react-native';
import { DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import React from 'react';
import tw from 'twrnc';
import Button from '../components/btn';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParams } from '../navigator/stackNavigator';


const Welcome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorParams> >();
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={tw `flex-1 justify-between`} >
      <View style={tw `justify-center items-center`} >
        
        <Image source={require('../assets/images/chat2.png')} style={tw `w-40 h-40`} />
        <Text style={{...tw `text-lg text-2xl font-bold`,color:theme.colors.text}}>Bienvenue</Text>
        <Text style={{...tw `text-base mt-4 mx-10 text-center`, fontSize: 14, color: theme.colors.text, letterSpacing: 0.5, textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10}}>
            Bienvenue dans notre application de chat! 🎉 Discuter avec vos proches et rencontrer de nouvelles personnes. 🗨️👥
          </Text>
      </View>

     

      <View style={tw `flex-row justify-center mb-7 `} >
          <Button color='black' onPress={handleLogin} style={tw `mr-5`} > Se connecter </Button>
          <Button color='#35374B' style={tw `ml-5`} > Se connecter </Button>
      </View>
    </View>
  )
}

export default Welcome;
