// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </View>
  );
}
