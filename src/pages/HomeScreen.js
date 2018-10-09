import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "antd-mobile-rn";
// import Drawer from "../components/Drawer";
import BasicGridExample from "../components/IndexList";

export default class HomeScreen extends Component {
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
      return (
          <View style={styles.container}>
              <View style={styles.header}>
                  <Text onPress={this.openDrawer} style={styles.drawerButton}>
            &#xe63c;
                  </Text>
                  <Text style={styles.userInfo}>欢迎xxx来到电子病历</Text>
              </View>
              <BasicGridExample navigate={navigate} />
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
        height: 40,
        fontFamily: "iconfont",
        lineHeight: 40,
        fontSize: 24,
        marginLeft: 10,
        color: "#ffffff"
    },
    userInfo: {
        height: 40,
        lineHeight: 40,
        flex: 1,
        textAlign: "center",
        color: "#ffffff"
    }
});
