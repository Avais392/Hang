import React, {useEffect} from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button as NBButton,
  Label,
} from 'native-base';

// import auth from '@react-native-firebase/auth';
import firebase from '../../../config/firebase';
import RegisterProfile from '../../../components/RegisterProfile';
import Button from '../../../components/Button';
import Spacer from '../../../components/Spacer';
import PhoneInputComponent from '../../../components/PhoneInputComponent';

import assets from '../../../assets';
import styles from './styles';

const {splash} = assets.images;
let appVerifier;

class PhoneNumberScreen extends React.Component {
  state = {
    phone: '',
    confirmResult: null,
    verificationCode: '',
    userId: '',
    OTP: '',
  };
  validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(this.state.phone);
  };
  initReCaptcha() {
    setTimeout(() => {
      let vm = this;
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          'expired-callback': function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        },
      );
      //
      this.appVerifier = window.recaptchaVerifier;
    }, 1000);
  }
  handleSendCode = () => {
    this.setState({confirmResult: 'dummy'});
    // Request to send OTP
    this.initReCaptcha();
    console.log('Send -');
    if (this.validatePhoneNumber()) {
      console.log('Send Code');

      firebase
        .auth()
        .signInWithPhoneNumber('+923213924692', this.appVerifier)
        .then((confirmResult) => {
          this.setState({confirmResult});
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });
    } else {
      alert('Invalid Phone Number');
    }
  };
  changePhoneNumber = () => {
    this.setState({confirmResult: null, verificationCode: ''});
  };
  handleVerifyCode = () => {
    // Request for OTP verification
    const {confirmResult, verificationCode} = this.state;
    if (verificationCode.length === 6) {
      confirmResult
        .confirm(verificationCode)
        .then((user) => {
          this.setState({userId: user.uid});
          alert(`Verified! ${user.uid}`);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });
    } else {
      alert('Please enter a 6 digit OTP code.');
    }
  };
  renderNumberPart() {
    return (
      <RegisterProfile>
        <View
          style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
          <Spacer vertical={3}></Spacer>
          {/* <PhoneInputComponent></PhoneInputComponent> */}

          <Item style={{alignSelf: 'center', width: '80%'}}>
            <TextInput
              placeholder={'Your Phone Number'}
              keyboardType="numeric"
              placeholderTextColor={'#a0a0a0'}
              keyboardType="phone-pad"
              value={this.state.phone}
              onChangeText={(phone) => {
                this.setState({phone});
                // this.handleSendCode()
                // console.log(phone);
              }}
              // maxLength={15}
              editable={this.state.confirmResult ? false : true}></TextInput>
          </Item>
          <Spacer vertical={1}></Spacer>
        </View>
        <View>
          <Spacer vertical={3}></Spacer>
          <Button title={'NEXT'} onPress={this.handleSendCode}></Button>
        </View>
      </RegisterProfile>
    );
  }
  renderVerificationPart() {
    return (
      <RegisterProfile
        heading="Enter Verification Code 🔑"
        subHeading="We sent you a text at 4016010550">
        <View
          style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
          <Spacer vertical={3}></Spacer>
          <Item style={{alignSelf: 'center', width: '80%'}}>
            <TextInput
              placeholder={'Enter Code'}
              keyboardType="numeric"
              placeholderTextColor={'#a0a0a0'}
              keyboardType="phone-pad"
              value={this.state.OTP}
              onChangeText={(OTP) => {
                this.setState({OTP});
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
            onPress={() => this.props.navigation.navigate('Snapchat')}></Button>
        </View>
      </RegisterProfile>
    );
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {!this.state.confirmResult
          ? this.renderNumberPart()
          : this.renderVerificationPart()}
      </View>
    );
  }
}

PhoneNumberScreen.propTypes = {
  navigation: PropTypes.object,
};

export default PhoneNumberScreen;
