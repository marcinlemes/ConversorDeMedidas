import React from 'react';
import {Entypo, FontAwesome5} from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import KmToM from './paginas/KmToM';
import MToKm from './paginas/MToKm';

export default function App() {

  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tabs.Navigator>
            
            <Tabs.Screen
              name='Quilômetros para Milhas' 
              component={KmToM} 
              options={{
                headerShown: false,
                tabBarActiveTintColor: 'black',
                tabBarIcon: ({color}) => (
                  <Entypo name='ruler' size={24} color={color} />
                  ),
              }}
            />
            
            <Tabs.Screen 
              name='Milhas para Quilômetros' 
              component={MToKm} 
              options={{
                  headerShown: false,
                  tabBarActiveTintColor: 'black',
                  tabBarIcon: ({color}) => (
                    <FontAwesome5 name='ruler-combined' size={24} color={color} />
                  ),
                }}
            />

        </Tabs.Navigator>
    </NavigationContainer>
  );
}

