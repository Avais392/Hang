import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import assets from '../../assets';
import styles from './styles';

const {splash, confetti} = assets.images;
const {width, height} = Dimensions.get('window');

class RegisterProfile extends React.Component {
  static defaultProps = {
    width: width / 3,
    height: width / 8,
    title: 'Click Me',
    onPress: () => Alert('Clicked'),
  };
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
    return (
      // <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        disabled={this.props.disabled}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: this.props.disabled
                ? '#a0a0a0'
                : 'rgb(36,175,253)',
            },
          ]}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
      // </View>
    );
  }
}

RegisterProfile.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterProfile;
