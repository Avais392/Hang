import React, {useEffect} from 'react';
import {
  ScrollView,
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
import {Bar} from 'react-native-progress';

import Spacer from '../../components/Spacer';
import Button from '../../components/Button';

import assets from '../../assets';
import styles from './styles';

const {splash, confetti} = assets.images;

class RegisterProfile extends React.Component {
  static defaultProps = {
    profileComponentNo: '1 / 5',
    progress: 0.2,
    heading: 'What’s your Phone Number? 📱',
    subHeading: 'We use your phone number to verify your identity. ',
    termsAndConditions:
      'By signing up you agree to our Terms of Service and our Privacy Policy',
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
      <View style={styles.mainContainer}>
        <Image
          source={splash}
          style={styles.imageView}
          resizeMode="contain"></Image>
        <View style={styles.innerContainer}>
          <Text style={styles.profileComponentNo}>
            {this.props.profileComponentNo}
          </Text>
          <Bar
            progress={this.props.progress}
            indeterminate={false}
            // style={{width:'100%'}}
            width={300}></Bar>

          <Text style={styles.heading}> {this.props.heading}</Text>
          <Text style={styles.subHeading}> {this.props.subHeading}</Text>
          {this.props.children ? this.props.children[0] : null}
          <Text style={styles.termsAndConditions}>
            {this.props.termsAndConditions}
          </Text>
          {this.props.children && this.props.children[1]
            ? this.props.children[1]
            : null}
        </View>
      </View>
    );
  }
}

RegisterProfile.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterProfile;
