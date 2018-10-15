import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import {Button} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class App extends Component{
  render() {
    return (
      <View style = {styles.view}>
        <Text>Welcome to React Native!</Text>
        <Button rounded onPress = {() => {}} style = {styles.button}>
          <Text> Adicionar nova tarefa </Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  button:{
    color: 'red',
    height: 30,
    width: 150
  },
  view:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  }
}