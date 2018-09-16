import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "antd-mobile-rn";
import Drawer from "./Drawer";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showDrawer: false
    };
  }
  static navigationOptions = {
    title: "首页"
  };
  openDrawer = () => {
    this.setState({
      showDrawer: true
    });
  };
  closeDrawer = () => {
    this.setState({
      showDrawer: false
    });
  };
  render() {
    const { navigate } = this.props.navigation;
    const { showDrawer } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            type="primary"
            size="small"
            style={styles.drawerButton}
            onClick={this.openDrawer}
          >
            开
          </Button>
          <Text style={styles.userInfo}>欢迎xxx来到电子病历</Text>
        </View>
        <Drawer
          showDrawer={showDrawer}
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
        />
        <Button onClick={() => navigate("Welcome", { name: "Welcome" })}>
          {"返回 welcome"}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#2DB7F5"
  },
  drawerButton: {
    width: 40,
    paddingLeft: 6,
    paddingRight: 6,
    height: 40
  },
  userInfo: {
    height: 40,
    lineHeight: 40,
    flex: 1,
    textAlign: "center",
    color: "#ffffff"
  }
});
