import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../Components/CustomeHeader/CustomeHeader';
import Color from '../../Constants/Color';
import {width, height, totalSize} from 'react-native-dimension';
import {Searchbar} from 'react-native-paper';
import Options from '../../Components/Options/Options';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderContainer from '../../Components/HeaderContainer/HeaderContainer';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Placelist from '../../Components/Box/Box';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Filter from '../../Components/Filter/Filter';
import Container from '../../Components/Container/Container';
import FontFamily from '../../Constants/FontFamily';
const Data = [{id: '1'}, {id: '1'}, {id: '1'}, {id: '1'}, {id: '1'}];

export default class BookFlight extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: Color.white}}>
          <View style={{width: '100%', height: '10%', marginTop: height(2)}}>
            <Header />
          </View>
          <ScrollView contentContainerStyle={{paddingBottom: height(2)}}>
            <View style={{height: '100%'}}>
              <View style={{marginLeft: height(2)}}>
                <Text
                  style={{fontFamily: FontFamily.Bold, fontSize: totalSize(3)}}>
                  Book Your Flight
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Filter name="One Way" icon="minuscircleo" />
                <Filter name="Round Tripe" icon="swap" />
              </View>

              <Container type="From" name="San Francisco" icon="aircraft" />
              <Container type="To" name="New York" icon="flow-line" />
              <Container
                type="Passanger"
                name="2 Adults"
                width="50%"
                icon="text-document"
              />
              <View style={{flexDirection: 'row'}}>
                <Container
                  type="Depatures"
                  name="5 july 2020"
                  width="43%"
                  icon="man"
                />
                <Container
                  type="Class"
                  name="Business"
                  width="43%"
                  icon="popup"
                />
              </View>
              <View style={{marginTop: height(2)}}>
                <HeaderContainer heading="Recomended" />
              </View>
              <FlatList
                data={Data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(data) => {
                  return <Placelist />;
                }}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
