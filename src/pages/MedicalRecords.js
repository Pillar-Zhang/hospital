import React, { Component } from "react";
import { View, Text } from "react-native";

export default class MedicalRecords extends Component {
  static navigationOptions = {
    title: "病历管理"
  };
  render() {
    return (
      <View>
        <Text>病历管理</Text>
      </View>
    );
  }
}
