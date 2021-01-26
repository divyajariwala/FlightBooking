import React from 'react';
import {View, Text} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
import FontFamily from '../../Constants/FontFamily';

const HeaderContainer = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: height(2),
        justifyContent: 'space-between',
        marginHorizontal: height(1),
      }}>
      <Text style={{fontFamily: FontFamily.Bold, fontSize: totalSize(2)}}>
        {props.heading}
      </Text>
      <Text style={{fontSize: totalSize(1.8) ,color:'#1F1F1F'}}>View All</Text>
    </View>
  );
};

export default HeaderContainer;
