import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LoginScreen, ListUserScreen} from '../screens';

export type DrawerParamList = {
  Login: undefined;
  ListUserScreen: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export const AppNavigators = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            swipeEnabled: false,
            drawerItemStyle: {height: 0},
          }}
        />
        <Drawer.Screen name="ListUserScreen" component={ListUserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
