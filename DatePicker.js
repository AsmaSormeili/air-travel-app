import React, { Component } from 'react';
  import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import PersianDatePicker from 'react-native-persian-date-picker';
 
 
  export default class App extends Component {
 
    constructor(props){
      super(props);
      this.state = {
        selectedDay: undefined,
        selectedYear: undefined,
        selectedMonth: undefined
      };
    }
    onDateConfirm=data=>{
      this.setState({ selectedYear: data[0], selectedMonth: data[1], selectedDay: data[2] });
    }
    render() {
      return (
        <View style={styles.container}>
          <PersianDatePicker onConfirm={this.onDateConfirm}  />
        </View>
      );
    }
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  }); 