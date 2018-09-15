import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "antd-mobile-rn";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "HomeScreen"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button onClick={() => navigate("Welcome", { name: "Welcome" })}>
        {"返回 welcome"}
      </Button>
    );
  }
}
