import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    }
  }

  renderItem = ({item}) => {
    return(
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image style={{ width: 100, height: 100,  margin: 5 }} source={{ uri: item.image }} />
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>
            {item.book_title}
          </Text>
        </View>
      </View>
    )
  }

  componentDidMount() {
    const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson.book_array
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    justifyContent: 'center',
  },
});
