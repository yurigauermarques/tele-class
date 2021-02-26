import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './../Home';
import InternaScreen from './../Interna';

const Drawer = createDrawerNavigator();

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Interna" component={InternaScreen} />
      </Drawer.Navigator>
      {props.children}
    </NavigationContainer>
  );
}

