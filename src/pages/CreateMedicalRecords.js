import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { InputItem, Picker, List } from "antd-mobile-rn";

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
  row: {
    flexDirection: "row",
    marginTop: 15
  },
  name: {
    width: 100,
    textAlign: "right",
    height: 40,
    lineHeight: 40,
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 50
  }
});

export default class CreateMedicalRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        sex: ["请选择"]
      }
    };
  }
  static navigationOptions = {
    title: "新建病历"
  };

  onChangeUserInfo = (name, value) => {
    console.log(name, value);
    const { userInfo } = this.state;
    const newUserInfo = Object.assign({}, userInfo, {
      [name]: value
    });
    this.setState({
      userInfo: newUserInfo
    });
  };
  render() {
    const { userInfo } = this.state;
    console.log(userInfo["sex"]);
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.createTitle}>个人信息</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>姓名：</Text>
          <InputItem
            value={userInfo["name"]}
            style={styles.input}
            onChange={value => this.onChangeUserInfo("name", value)}
            placeholder="姓名"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>性别：</Text>
          <Picker
            data={[{ label: "男", value: "男" }, { label: "女", value: "女" }]}
            cols={2}
            value={userInfo["sex"]}
            onChange={value => this.onChangeUserInfo("sex", value)}
          >
            <List.Item
              style={{ width: 150, textAlign: "center" }}
              arrow="horizontal"
            >
              请选择
            </List.Item>
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>电话：</Text>
          <InputItem
            value={userInfo["phone"]}
            style={styles.input}
            onChange={value => this.onChangeUserInfo("phone", value)}
            placeholder="电话"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>身份证号：</Text>
          <InputItem
            value={userInfo["IDCard"]}
            style={styles.input}
            onChange={value => this.onChangeUserInfo("IDCard", value)}
            placeholder="身份证号"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>病名：</Text>
          <InputItem
            value={userInfo["DiseaseName"]}
            style={styles.input}
            onChange={value => this.onChangeUserInfo("DiseaseName", value)}
            placeholder="病名"
          />
        </View>
      </ScrollView>
    );
  }
}
