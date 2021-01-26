import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../Components/CustomeHeader/CustomeHeader';
import Color from '../../Constants/Color';
import {width, height, totalSize} from 'react-native-dimension';
import {Searchbar} from 'react-native-paper';
import Options from '../../Components/Options/Options';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderContainer from '../../Components/HeaderContainer/HeaderContainer';
import {FlatList} from 'react-native-gesture-handler';
import Placelist from '../../Components/Box/Box';
import FontFamily from '../../Constants/FontFamily';

const Data = [{id: '1'}, {id: '1'}, {id: '1'}, {id: '1'}, {id: '1'}];
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: '100%', backgroundColor: Color.white}}>
          <View style={{width: '100%', height: '10%', marginTop: height(2)}}>
            <Header />
          </View>
          <View style={{height: '80%'}}>
            <View style={{height: '15%'}}>
              <View style={{marginLeft: height(2)}}>
                <Text
                  style={{fontSize: totalSize(2),color:'#1F1F1F'}}>
                  Hi,Robert
                </Text>
                <Text
                  style={{fontFamily: FontFamily.Bold, fontSize: totalSize(3)}}>
                  Final Deals
                </Text>
              </View>
              <View></View>
            </View>
            <Searchbar
              placeholder="Search Flight,Hotels,etc... "
              // onChangeText={onChangeSearch}
              value={this.state.search}
              style={{
                width: '95%',
                marginHorizontal: height(1.5),
                borderRadius: height(2),
                height:'8%'
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: height(2),
              }}>
              <Options
                name="aircraft"
                color="#4284f4"
                gotoFlight={() => {
                  console.log('Button clic');
                  navigation.navigate('BookFlight');
                }}
              />
              <Options name="direction" color="orange" />
              <Options name="drive" color="yellow" />
              <Options name="dots-two-horizonta" color="#4285f4" />
            </View>
            <View style={{marginTop: height(2)}}>
              <HeaderContainer heading="Popular Places" />
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
        </View>
      </SafeAreaView>
    );
  }
}
