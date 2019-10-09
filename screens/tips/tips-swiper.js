import React, {Component} from 'react';
import Swiper from 'react-native-deck-swiper';
import {StyleSheet, Text, View} from 'react-native';
import {Image, SocialIcon} from 'react-native-elements';
import swiperStyles from './tips-swiper.styles';

export default class TipsSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.tips,
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
    };
  }

  renderCard = (card, index) => {
    const cardDetails = this.props.tips[index];
    return (
      <View
        style={[
          styles.card,
          {backgroundColor: this.props.selectedSourceColor},
        ]}>
        <Text style={styles.titleText}>{cardDetails.name}</Text>
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image
            source={require('../../images/stuff.png')} // TODO::dynamic image
            style={{width: 200, height: 200}}
          />
        </View>
        <Text style={styles.descText}>{cardDetails.description}</Text>
        <View style={{flexDirection:'row',justifyContent: 'center', marginVertical: 30}}>
          <SocialIcon type="linkedin" />
          <SocialIcon type="twitter" />
          <SocialIcon type="facebook" />
        </View>
      </View>
    );
  };

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
    this.props.setModalVisible(false);
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  render() {
    return (
      <View style={swiperStyles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard></Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'sacramento',
    backgroundColor: 'transparent',
  },
  descText: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    fontFamily: 'CormorantGaramond-Light',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
});
