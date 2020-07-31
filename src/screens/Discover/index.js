import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles'

class Spacer extends React.Component {
  static defaultProps = {
    horizontal: 0,
    vertical: 0,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[styles.mainContainer,{
          marginVertical: this.props.vertical?this.props.vertical*10:null,
          marginHorizontal: this.props.horizontal?this.props.horizontal*10:null,
        },this.props.style?this.props.style:null]}>{this.props.children}
        <Text>Discover</Text></View>
    );
  }
}



export default Spacer;
