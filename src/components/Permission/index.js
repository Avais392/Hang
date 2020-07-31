import React, {useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import styles from './styles';
import {
  ListItem,
  Button,
  Left,
  Icon,
  Body,
  Text,
  Right,
  Switch,
  Content,
} from 'native-base';

const {width, height} = Dimensions.get('window');

class Permission extends React.Component {
  static defaultProps = {
    title: 'Label Name Missing',
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      onValueChange: () => {},
      icon:'airplane'
    };
  }

  render() {
    return (
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor: this.state.checked ? '#24affc' : '#f1f2f4',
            flexDirection: 'row',
          },
          this.props.style ? this.props.style : null,
        ]}>
        <Content>
          <ListItem
            icon
            style={
              {
                // flex: 1,
                // flexDirection: 'row',
                // justifyContent: 'space-evenly',
              }
            }>
            <Left>
              {/* <Button style={{backgroundColor: '#FF9501'}}> */}
              <Icon name={this.props.icon} />
              {/* </Button> */}
            </Left>
            <Body>
              <Text>{this.props.title}</Text>
            </Body>
<Right>
            <Switch
              // style={{marginLeft: 100}}
              value={this.state.checked}
              onValueChange={() => {
                this.setState({checked: !this.state.checked});
                this.props.onValueChange;
              }}
            /></Right>
          </ListItem>
        </Content>
        {/* {this.props.children} */}
      </View>
    );
  }
}

export default Permission;
