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

const {splash, confetti} = assets.images;
const {width, height} = Dimensions.get('window');

class AddPhotosScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isFocused: '',
    images:['image']
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
          profileComponentNo="4 / 5"
          progress={0.8}
          heading="Add Photos 📸"
          subHeading="Show off your most 🔥 pictures"
          termsAndConditions="">
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
              <ImageInput  type="Photo"
            logo={true}></ImageInput>
            <Spacer
              vertical={3}
              style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <ImageInput>
              <Spacer
                horizontal={0.5}
                style={[
                  styles.imageSelectView,
                  {width: width / 3.5, height: width / 2},
                ]}>
                <Icon name="calendar" size={18} color={'#a0a0a0'} />
              </Spacer></ImageInput>
              <Spacer
                // horizontal={0.1}
                horizontal={0.5}
                style={[
                  styles.imageSelectView,
                  {width: width / 3.5, height: width / 2},
                ]}></Spacer>
            </Spacer>
          </View>
          <View>
            <Spacer vertical={3}></Spacer>
            <Button
              title={'NEXT'}
              onPress={() =>
                this.props.navigation.navigate('Permissions')
              }></Button>
          </View>
        </RegisterProfile>
      </View>
    );
  }
}

AddPhotosScreen.propTypes = {
  navigation: PropTypes.object,
};

export default AddPhotosScreen;
