import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

const Options = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.gotoFlight()}>
        <View
          style={{
            backgroundColor: props.color,
            marginTop: height(3),
            height: height(8),
            width: width(13),
            borderRadius: height(1.4),
            justifyContent: 'center',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Entypo name={props.name} size={20} color="white" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
