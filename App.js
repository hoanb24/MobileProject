
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/home/Home';
import { FontAwesome } from "@expo/vector-icons";
import Menu from './screen/home/Menu';
import { Text, } from 'react-native';
import { StatusBar } from "expo-status-bar";
import Message from "./screen/chat/Messagex";
import ChatDetail from "./screen/chat/ChatDetails";
import CallRinging from "./screen/chat/CallRinging";
import Call from "./screen/chat/Call";
import SearchPage from './screen/home/SearchPage';
import AllView from './screen/home/AllView';
import ViewItem from './screen/home/ViewItem';
import DetailPage from './screen/home/DetailPage';
import TestSwipeListView from "./screen/order/OrderDetails";
import ShoppingCartPage from './screen/home/ShoppingCartPage';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const BottomTab = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({

          headerShown: false,
          tabBarLabel: ({ focused, color }) => {
            if (focused) {
              return <Text style={{ color }}>{route.name}</Text>;
            }
            return null; // Ẩn label khi tab không được chọn
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'User') {
              iconName = 'user';
            } else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Chat') {
              iconName = 'comment';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6B50F6', 
        })}
        
      >
        <Tab.Screen  name="Home" component={Home}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name='home' size={30} color={color} />,
          }}
        />
        <Tab.Screen name="User" component={Menu}
          options={{

            tabBarIcon: ({ color }) => <FontAwesome name='user' size={30} color={color} />,
          }}
        />
        <Tab.Screen name="Cart" component={TestSwipeListView}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name='shopping-cart' size={30} color={color} />,
          }}
        />
        <Tab.Screen name="Chat" component={Message}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name='comment' size={30} color={color} />
          }}
        />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={BottomTab} />
        <Stack.Screen name="allview" component={ViewItem} />
        <Stack.Screen name="message" component={Message} />
        <Stack.Screen name="chatDetail" component={ChatDetail} />
        <Stack.Screen name="callRinging" component={CallRinging} />
        <Stack.Screen name="call" component={Call} />
        <Stack.Screen name='searchs' component={SearchPage}/>
        <Stack.Screen name='detailpage' component={DetailPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


