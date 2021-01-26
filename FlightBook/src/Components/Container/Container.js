import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {width, height, totalSize} from 'react-native-dimension';
import FontFamily from '../../Constants/FontFamily';

const Container = (props) => {
  return (
    <View
      style={{
        shadowColor: '#1F1F1F',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 0,
        borderRadius: 6,
        padding: height(1.3),
        width: props.width,
        backgroundColor: 'white',
        margin: height(2),
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Entypo name={props.icon} size={20} color="#1F1F1F" />
        </View>
        <View>
          <Text>{props.type}</Text>
          <Text>{props.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Container;
