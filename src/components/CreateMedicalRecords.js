import React, { Component } from "react";
import { View, Text } from "react-native";

export default class CreateMedicalRecords extends Component {
  static navigationOptions = {
    title: "新建病历"
  };
  render() {
    return (
      <View>
        <Text>新建病历</Text>
      </View>
    );
  }
}
