import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width, height, totalSize} from 'react-native-dimension';

const CustomeHeader = (props) => {
  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
      <View style={{width: '40%', marginLeft: height(1)}}>
        <AntDesign name="left" size={20} color="black" />
      </View>
      {/* <View style={{justifyContent:'center',width:'60%'}}>
        <AntDesign name="menufold" size={12} color="black" />
      </View> */}
      <View style={{width: '50%'}}>
        <Text>{props.Heading}</Text>
      </View>
      <View style={{width: '20%'}}>
        <AntDesign name="menufold" size={20} color="black" />
      </View>
    </View>
  );
};

export default CustomeHeader;
