import { useColorScheme, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import StackNavigator from '../navigator/stackNavigator';

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
};

const MyDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#31363F', // couleur de fond en mode sombre
    card: 'black', // couleur de la carte en mode sombre
    text: 'rgb(229, 229, 231)', // couleur du texte en mode sombre
    border: 'rgb(39, 39, 41)', // couleur de la bordure en mode sombre
  },
};

const Route = () => {
  const scheme = useColorScheme();

  return (
    <>
      <StatusBar barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={scheme === 'dark' ? '#31363F' : 'white'} />
      <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : LightTheme}>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

export default Route;
