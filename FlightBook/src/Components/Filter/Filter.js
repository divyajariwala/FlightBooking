import React from 'react';
import {View, Text} from 'react-native';
import {height} from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Filter = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: height(0.2),
        borderRadius: height(1),
        marginLeft: height(1),
        padding: height(1),
        marginTop: height(2),
      }}>
      <AntDesign name={props.icon} size={18} />
      <Text style={{marginLeft: height(1)}}>{props.name}</Text>
    </View>
  );
};

export default Filter;
