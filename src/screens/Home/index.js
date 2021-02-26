import React from 'react';
import {Text, View, Platform, Button} from 'react-native';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Inicial</Text>
      <Button
        title="Go to Interna"
        onPress={() => navigation.navigate('Interna')}
      />
    </View>
  );
}


export default HomeScreen;