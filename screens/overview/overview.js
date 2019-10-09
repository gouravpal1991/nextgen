import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from 'react-native-elements';


import {COLORS} from '../../utils/constants';



class Overview extends Component {
  state = {};

  render() {
  
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 10,
    height: 230,
  },
});

export default Overview;
