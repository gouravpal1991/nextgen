import {StyleSheet} from 'react-native';

const swiperStyles = StyleSheet.create({
      container: {
       flex:1,
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center'
      },
      card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
      },
      text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
      },
      done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
      }
  });