/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

StatusBar.setTranslucent(true)
StatusBar.setBackgroundColor('transparent')
StatusBar.setBarStyle('dark-content')

function App() {
  return (
    <Routes />
  )
}

export default App;
