import React from 'react';
import {View, Text, Image} from 'react-native';
import Newyork from '../../../Assets/Images/newyork.jpg';
import FontFamily from '../../Constants/FontFamily';
import {width, height, totalSize} from 'react-native-dimension';

const Box = () => {
  return (
    <View
      style={{
        shadowColor: '#1F1F1F',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 0,
        borderRadius: 9,
        padding: height(1),
        width: '45%',
        backgroundColor: 'white',
        margin: height(1),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={Newyork}
        resizeMode="cover"
        style={{
          width: width(40),
          height: height(25),
          borderRadius: height(3),
        }}></Image>
      <Text
        style={{
          fontFamily: FontFamily.Bold,
          fontSize: totalSize(2),
          marginTop: height(1),
        }}>
        New York city skyline
      </Text>
      <Text>Distance to 2.999 mi</Text>
    </View>
  );
};

export default Box;
