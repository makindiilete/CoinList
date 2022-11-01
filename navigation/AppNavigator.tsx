import React from 'react';
import {Image, Platform, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {CoinsScreen} from '../screens/Coins/CoinsScreen';
import routes from './routes';
import {AppActiveTab} from '../components/AppActiveTab';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const tabs = () => {
    return (
      <>
        <Tab.Screen
          name={routes.COINS}
          component={CoinsScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <AppActiveTab>
                  <Image
                    source={require('../assets/images/coin_active.png')}
                    style={{width: 25, height: 25, resizeMode: 'contain'}}
                  />
                </AppActiveTab>
              ) : (
                <Image
                  source={require('../assets/images/coin.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
              ),
            headerShown: true,
            headerTitle: 'Coin List',
            headerTintColor: Colors.colorPrimary,
            tabBarTestID: 'app-header',
          }}
        />

        <Tab.Screen
          name={routes.HOME}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <AppActiveTab>
                  <Image
                    source={require('../assets/images/home_active.png')}
                    style={{width: 25, height: 25, resizeMode: 'contain'}}
                  />
                </AppActiveTab>
              ) : (
                <Image
                  source={require('../assets/images/home.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
              ),
          }}
        />
      </>
    );
  };

  if (Platform.OS === 'android') {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: 'Inter-Bold',
          },
          tabBarActiveTintColor: Colors.colorPrimary,
        }}>
        {tabs()}
      </Tab.Navigator>
    );
  } else {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: 'Inter-Bold',
          },
          tabBarActiveTintColor: Colors.colorPrimary,
        }}>
        {tabs()}
      </Tab.Navigator>
    );
  }
};

export default AppNavigator;
