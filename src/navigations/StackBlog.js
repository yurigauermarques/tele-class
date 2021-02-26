
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, IconButton, Colors} from "react-native-paper";

import BlogScreen from './../screens/Blog/Blog';
import TabStackBlog from './TabStackBlog';

const Stack = createStackNavigator();

export default function StackBrogui({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Blog"
            component={TabStackBlog} 
            options={{ 
              title: 'Blog',
              headerLeft: () => (
                  <IconButton
                      icon="menu"
                      color={Colors.red500}
                      size={20}
                      onPress={() => navigation.openDrawer()}
                  />
                    ),
            }}
        />
    </Stack.Navigator>
  );
}
