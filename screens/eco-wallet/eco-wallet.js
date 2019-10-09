import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import styles from './eco-wallet.styles';
import {Button} from 'react-native-elements';
import Tips from '../tips';
import Transactions from '../transactions';
import Overview from '../overview';

const FirstRoute = () => <Overview />;

const SecondRoute = () => <Transactions/>

const ThirdRoute = () => <Tips />;

class EcoWallet extends Component {
  state = {
    index: 0,
    routes: [{key: 'first', title: 'Overview'}, {key: 'second', title: 'Transactions'},{key: 'third', title: 'Tips'}],
  };

  render() {
    return (
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third:ThirdRoute
          })}
          onIndexChange={index => this.setState({index})}
          
        />
    );
  }
}

export default EcoWallet;
