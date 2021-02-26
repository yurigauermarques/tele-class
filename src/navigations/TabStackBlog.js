import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BlogScreen from './../screens/Blog/Blog';
import AlbunsScreen from './../screens/Blog/Albuns';
import CommentsScreen from './../screens/Blog/Comments';
import PhotosScreen from './../screens/Blog/Photos';
// import PostsScreen from './../screens/Blog/Posts';

const Tab = createBottomTabNavigator();

export default function TabStackBlog() {
  return (
    <Tab.Navigator
      initialRouteName="BlogScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Blog':
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              break;
            case 'Albuns':              
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
            case 'Comentários':              
              iconName = focused ? 'paper-plane' : 'paper-plane-outline';
              break;
            case 'Fotos':              
              iconName = focused ? 'camera' : 'camera-outline';
              break;
            case 'Artigos':              
              iconName = focused ? 'newspaper' : 'newspaper-outline';
              break;
          
            default:
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Blog" component={BlogScreen} />
      <Tab.Screen name="Albuns" component={AlbunsScreen} />
      <Tab.Screen name="Comentários" component={CommentsScreen} />
      <Tab.Screen name="Fotos" component={PhotosScreen} />
      {/* <Tab.Screen name="Artigos" component={PostsScreen} /> */}
    </Tab.Navigator>
  );
}