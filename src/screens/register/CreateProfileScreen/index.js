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
import Icon from 'react-native-vector-icons/FontAwesome';

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
    age:'',
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
          profileComponentNo="3 / 5"
          progress={0.6}
          heading="Create a Profile 😃"
          subHeading="Fill out the info below so friends can find you"
          termsAndConditions="">
          <View
            style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
            <Spacer vertical={3}></Spacer>

            <TextInput
              placeholder={'Username'}
              onFocus={() => this.setState({isFocused: 'username'})}
              style={{
                fontWeight: 'bold',
                borderBottomWidth: 2,
                width: '80%',
                borderBottomColor:
                  this.state.isFocused === 'username'
                    ? 'rgb(36,175,253)'
                    : '#a0a0a0',
              }}
              placeholderTextColor={'#a0a0a0'}
              value={this.state.username}
              onChangeText={(username) => {
                this.setState({username});
              }}
              // maxLength={15}
              // editable={this.state.confirmResult ? false : true}
            ></TextInput>

            <Spacer
              horizontal={1}
              vertical={3}
              style={{
                flex:0,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              <Button title="💁‍♂️ Guy" />
              <Button title="🙋‍♀️ Girl" />
            </Spacer>
            <Spacer vertical={1} style={{
               alignSelf:'center',
                width: '100%',
              }}>
              <TextInput
                placeholder={'Age'}
                onFocus={() => this.setState({isFocused: 'age'})}
                style={{
                  fontWeight: 'bold',
                  borderBottomWidth: 2,
                  width: '80%',
                  borderBottomColor:
                    this.state.isFocused === 'age'
                      ? 'rgb(36,175,253)'
                      : '#a0a0a0',
                }}
                placeholderTextColor={'#a0a0a0'}
                value={this.state.age}
                onChangeText={(age) => {
                  this.setState({age});
                }}
                // maxLength={15}
                // editable={this.state.confirmResult ? false : true}
              ></TextInput>
            </Spacer>
          </View>
          <View>
            <Spacer vertical={3}></Spacer>
            <Button
              title={'NEXT'}
              onPress={() =>
                this.props.navigation.navigate('AddPhotos')
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
