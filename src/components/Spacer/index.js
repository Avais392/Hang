import React, {useEffect} from 'react';
import {View} from 'react-native';

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
        style={{
          marginVertical: this.props.vertical?this.props.vertical*10:null,
          marginHorizontal: this.props.horizontal?this.props.horizontal*10:null,
        }}>{this.props.children}</View>
    );
  }
}



export default Spacer;
