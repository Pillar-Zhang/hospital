import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SearchBar, List } from "antd-mobile-rn";

const Item = List.Item;
// const Brief = Item.Brief;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  createTitle: {
    height: 40,
    lineHeight: 40,
    backgroundColor: "#21a2c4",
    paddingLeft: 10,
    color: "#ffffff",
    letterSpacing: 1
  },
  medicalItem: {
    height: 36,
    lineHeight: 36,
    borderColor: "#21a2c4",
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
export default class MedicalRecords extends Component {
  constructor() {
    super();
    this.state = {
      value: "半夏"
    };
  }
  static navigationOptions = {
    title: "病历管理"
  };
  onChange = value => {
    this.setState({ value });
  };

  clear = () => {
    this.setState({ value: "" });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.createTitle}>管理病历</Text>
        </View>
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value: any) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
        <View style={{ marginTop: 10, marginBottom: 500 }}>
          <Text style={styles.medicalItem}>病历1</Text>
          <Text style={styles.medicalItem}>病历2</Text>
          <Text style={styles.medicalItem}>病历3</Text>
          <Text style={styles.medicalItem}>病历4</Text>
          <Text style={styles.medicalItem}>病历5</Text>
        </View>
      </View>
    );
  }
}
