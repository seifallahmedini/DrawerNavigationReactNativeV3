import React, { Component } from 'react';
import { View, Text } from 'react-native';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default componentName;
const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
    }
});