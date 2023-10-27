
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home/Home';
import ViewItem from '../screen/home/ViewItem';
const Stack = createNativeStackNavigator();
function Navigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="viewitem" component={ViewItem} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
  export default Navigator;
