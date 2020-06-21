/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
// import { createSharedElementStackNavigator} from 'react-navigation-shared-element'
import MainScreen from './screens/MainScreen'
import DetailScreen from './screens/DetailScreen'

const Stack = createStackNavigator();

const App = ({navigation}) => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen 
          name="DetailScreen" 
          component={DetailScreen}
          options={navigation=>({
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({current: (progress)})=>{
              return {
                cardStyle: {
                  // opacity: progress
                }
              }
            }
          })}

          sharedElementsConfig ={(route)=> {
            const {data} = route.params
            return [
              {
                id: `item.${data.id}.photo`,
                animation: 'move',
                resize: 'clip',
                align: 'center-top'
              },
              {
                id: `item.${data.id}.text`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },
              {
                id: `item.${data.id}.profilePic`,
                animation: 'move',
                resize: 'clip',
                align: 'left-center'
              },
              {
                id: `item.${data.id}.username`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },
              {
                id: `item.${data.id}.readtime`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },
            ]
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
