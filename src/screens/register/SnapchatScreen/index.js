import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  TextInput,
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

import assets from '../../../assets';
import styles from './styles';

import RegisterProfile from '../../../components/RegisterProfile';
import Spacer from '../../../components/Spacer';
import Button from '../../../components/Button';

const {splash, confetti} = assets.images;

class SnapchatScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: '',
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
          profileComponentNo="2 / 5"
          progress={0.4}
          heading="What’s your Snapchat Username? 👻"
          subHeading="Connect your Snapchat to show your Bitmoji"
          termsAndConditions="">
          <View
            style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
            <Spacer vertical={3}></Spacer>
            <Item style={{alignSelf: 'center', width: '80%'}}>
              <TextInput
                placeholder={'Snapchat Username'}
                placeholderTextColor={'#a0a0a0'}
                value={this.state.username}
                onChangeText={(username) => {
                  this.setState({username});
                }}
                // maxLength={15}
                // editable={this.state.confirmResult ? false : true}
              ></TextInput>
            </Item>
            <Spacer vertical={1}></Spacer>
          </View>
          <View>
            <Spacer vertical={3}></Spacer>
            <Button
              title={'NEXT'}
              onPress={() =>
                this.props.navigation.navigate('CreateProfile')
              }></Button>
          </View>
        </RegisterProfile>
      </View>
    );
  }
}

SnapchatScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SnapchatScreen;
