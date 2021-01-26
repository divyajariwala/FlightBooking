import React from 'react';
import HomeStack from '../Navigation/HomeStack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
