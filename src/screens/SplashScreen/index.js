import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import assets from '../../assets';
import styles from './styles';

const {splash, confetti} = assets.images;

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }
  navigateToScreen = (route) => {
    const navigateAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: route})],
    });
    this.props.navigation.dispatch(navigateAction);
  };


  async componentDidMount() {
    await this.handleAnimation();
    setTimeout(async () => {
      if (await AsyncStorage.getItem('userData')) {
        this.navigateToScreen('PhoneNumber');
      } else {
        this.navigateToScreen('PhoneNumber');
      }
    }, 3000);
  }

  handleAnimation = async () => {
    await Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.ease,
    }).start();
  };
  render() {
    return (
      <View style={styles.mainContainer}>
       
        <Animated.Image
          source={confetti}
          resizeMode="contain"
          style={{
            position: 'absolute',
            // left: 40,
            // top: 100,
            // height: 20,
            width: '50%',
            transform: [
              {
                translateX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0],
                }),
              },
              {
                translateY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0],
                }),
              },
              {
                scaleX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 5],
                }),
              },
              {
                scaleY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 5],
                }),
              },
            ],
          }}
        />
        <Image style={styles.imageView} resizeMode="contain" source={splash} />
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SplashScreen;
