import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookFlight from '../Screens/BookFlight/BookFlight';
import SelectTicket from '../Screens/SelectTicket/SelectTicket';

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BookFlight" component={BookFlight} />
      <Stack.Screen name="SelecTicket" component={SelectTicket} />
    </Stack.Navigator>
  );
};

export default HomeStack;
