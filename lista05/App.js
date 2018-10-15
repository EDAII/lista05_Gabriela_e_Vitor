import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import {Button} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      newTaskName:"",
      newTaskTime:{},
      taskList:[]
    }
  }

  _showDateTimePicker = () => this.setState({ isVisible: true });

  _hideDateTimePicker = () => this.setState({ isVisible: false });

  _handleDatePicked = (date) => {
    console.log(date);
    this.setState({newTaskTime: date})
    this._hideDateTimePicker();
    this.addToList();
  };

  addToList(){
    task = {
      name: this.state.newTaskName,
      date: this.state.newTaskTime
    }
    //this.setState({taskList: taskList.push(task)})
    console.log(task)
  }

  render() {
    return (
      <View style = {styles.view}>
        <Text>Welcome to React Native!</Text>
        <TextInput
          placeholder = "Nova tarefa"
          style = {styles.input}
          onChangeText={(newTaskName) => (this.setState({newTaskName}))}
        />
        <Button rounded onPress = {() => {this._showDateTimePicker()}} style = {styles.button}>
          <Text style={{color:"#FFF"}}> Adicionar nova tarefa </Text>
        </Button>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onCancel = {this._hideDateTimePicker}
          onConfirm = {this._handleDatePicked}
          mode = 'datetime'
        />
      </View>
    );
  }
}

const styles = {
  button:{
    backgroundColor: 'red',
    height: 30,
    width: 150
  },
  view:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  },
  input:{
    borderColor:'red'
  }
}