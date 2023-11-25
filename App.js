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
import ConfirmOrder from './screen/order/ConfirmOrder';
import Shipping from './screen/order/Shipping';
import Payment from './screen/order/Payment';
import Address from './screen/order/Address';
import Ordered from './screen/order/Ordered';

import SignIn from './screen/auth/Login';
import SignUp from './screen/auth/SignUp';
import Profile from './screen/home/Profile';
import DetailMenu from './screen/home/DetailMenu';

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
        <Tab.Screen name="User" component={SignIn}
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
        <Stack.Screen name='confirmorder' component={ConfirmOrder}/>
        <Stack.Screen name='shipping' component={Shipping}/>
        <Stack.Screen name='payment' component={Payment}/>
        <Stack.Screen name='address' component={Address}/>
        <Stack.Screen name='ordered' component={Ordered}/>
        <Stack.Screen name='profile' component={Profile}/>
        <Stack.Screen name='register' component={SignUp}/>
        <Stack.Screen name='login' component={SignIn}/>
        <Stack.Screen name='menudetail' component={DetailMenu}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}