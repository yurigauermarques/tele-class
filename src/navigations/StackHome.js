
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, IconButton, Colors} from "react-native-paper";

import HomeScreen from './../screens/Home';
import InternaScreen from './../screens/Interna';


const Stack = createStackNavigator();

export default function StackHome({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home"
            component={HomeScreen} 
            options={
                {
                    title: 'Inicio',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: '#696969',
                    },
                    headerLeft: () => (
                        <IconButton
                            icon="menu"
                            color={Colors.red500}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                }
            }
        />
        <Stack.Screen 
            name="Interna"
            component={InternaScreen} 
            options={
                {
                    title: 'Detalhes',
                    headerStyle: {
                        backgroundColor: '#778899',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }
            }
        />
    </Stack.Navigator>
  );
}
