import React, {useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Label,
  Text,
} from 'native-base';
import PhoneInput from 'react-native-phone-input';
import IntlPhoneInput from 'react-native-intl-phone-input';
import styles from './styles';

const {width, height} = Dimensions.get('window');
class PhoneInputComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      valid: '',
      type: '',
      value: '',
    };

    this.phone = React.createRef();
    this.updateInfo = this.updateInfo.bind(this);
  }
  onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
    console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
  };
  updateInfo() {
    this.setState({
      valid: this.phone?.isValidNumber(),
      type: this.phone?.getNumberType(),
      value: this.phone?.getValue(),
    });
  }

  render() {
    console.log(this.state.valid);
    return (
      <View style={styles.mainContainer}>
        <IntlPhoneInput
        offset={10}
        // focus
          onChangeText={this.onChangeText}
          containerStyle={{backgroundColor: '#fff', width: 200, marginLeft: width/6}}
        />
        <Item style={{alignSelf:'center'}}><Input></Input></Item>
      </View>
    );
  }
}

export default PhoneInputComponent;
