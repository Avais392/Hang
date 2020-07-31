import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button as NBButton,
  Label,
} from 'native-base';

import {StackActions, NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import assets from '../../../assets';
import styles from './styles';

import RegisterProfile from '../../../components/RegisterProfile';
import Spacer from '../../../components/Spacer';
import Button from '../../../components/Button';
import ImageInput from '../../../components/ImageInput';
import Permission from '../../../components/Permission';

const {splash, confetti} = assets.images;
const {width, height} = Dimensions.get('window');

class PermissionsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isFocused: '',
  };
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
        <RegisterProfile
          profileComponentNo="5 / 5"
          progress={1}
          heading="Permissions📸"
          subHeading="Enable the following permissions to use Hang"
          termsAndConditions="">
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Spacer
              vertical={3}
              style={
                {
                  // justifyContent: 'flex-start',
                }
              }>
              <Permission title={'Location'}></Permission>
              <Permission title={'Notifications'}></Permission>
              <Permission title={'Contact'}></Permission>
              <Permission title={'Camera'}></Permission>
            </Spacer>
          </View>
          <View>
            <Spacer vertical={3}></Spacer>
            <Button
              title={'NEXT'}
              onPress={() =>{this.props.navigation.navigate('Main')}
              }></Button>
          </View>
        </RegisterProfile>
      </View>
    );
  }
}

PermissionsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default PermissionsScreen;
