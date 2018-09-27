import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SearchBar, List } from "antd-mobile-rn";

const Item = List.Item;
// const Brief = Item.Brief;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  createTitle: {
    height: 40,
    lineHeight: 40,
    backgroundColor: "#21a2c4",
    paddingLeft: 10,
    color: "#ffffff",
    letterSpacing: 1
  },
  listContainer: {
    flex: 1,
    marginTop: 10
  },
  medicalItem: {
    borderColor: "#21a2c4",
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  actionDelete: {
    display: "flex",
    color: "#21a2c4",
    height: 36,
    lineHeight: 36,
    marginRight: 10,
    textAlign: "right"
  },
  medicalItemName: {
    display: "flex",
    height: 36,
    lineHeight: 36,
    textAlign: "left"
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
      <ScrollView>
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
          <View style={styles.listContainer}>
            {Array.from(new Array(20)).map((val, index) => {
              console.log(index, "index");
              return (
                <View key={index} style={styles.medicalItem}>
                  <Text style={styles.medicalItemName}>
                    病历
                    {index}
                  </Text>
                  <Text style={styles.actionDelete}>删除</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
