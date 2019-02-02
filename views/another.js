import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import CustomButton from '../components/CustomButton.js'

export default class Another extends React.Component {
  constructor() {
    super();
    this.state = {
      score1: 0,
      score2: 0,
      verrou: true
    }
  }

  addScorePlayer1 = () => {
    if(this.state.score1 < 50 && this.state.score2 < 50) {
      this.setState({ score1: this.state.score1 +1 });
    } else if(this.state.score1 >= 50 && this.state.score2 < 50) {
      alert( " Player 1 won the Game mchit feha 😆😆😆😆😆 ti chbik 5obza hhhh" );
      this.setState({
        verrou: false
      })
    }
  }

  addScorePlayer2 = () => {
    if(this.state.score1 < 50 && this.state.score2 < 50) {
      this.setState({ score2: this.state.score2 +1 });
    } else if(this.state.score1 < 50  && this.state.score2 >= 50) {
      alert( "Player 2 won the Game mchit feha 😆😆😆😆😆 ti chbik 5obza hhhh" );
      this.setState({
        verrou: false
      })
    }  
  }

  playAgain = () => {
    this.setState({
      score1: 0,
      score2: 0,
      verrou: true
    });
  }

 

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "red"}}> 
          <CustomButton onPress={this.addScorePlayer1}/>
        </View>
        <View style={{ flex: 1, alignItems:'center',margin: 5 , justifyContent: 'center', backgroundColor: 'red' }}>
          <Text>Player 1</Text>
          <Text>{this.state.score1}</Text>
        </View>

        <View style={{ flex: 1, alignItems:'center',margin: 5 , justifyContent: 'center', backgroundColor: 'red' }}>
          <CustomButton title='play again' verrou={this.state.verrou} onPress={this.playAgain}/>
        </View>

        <View style={{ flex: 1, alignItems:'center',margin: 5 , justifyContent: 'center', backgroundColor: "green" }}>
          <Text>Player 2</Text>
          <Text>{this.state.score2}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "green" }}>
          <CustomButton onPress={this.addScorePlayer2}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 130,
  },
});
