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

class RegisterProfile extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }
  navigateToScreen = (route) => {
    const navigateAction = StackActions.push({
      // index: 0,
      actions: [NavigationActions.navigate({routeName: route})],
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return <View style={styles.mainContainer}>
    </View>;
  }
}

RegisterProfile.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterProfile;
