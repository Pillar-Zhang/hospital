/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "antd-mobile-rn";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>电子病历</Text>
        <Text style={styles.welcome}>欢迎使用电子病历应用</Text>
        <Button style={styles.start}>开始</Button>
        <Text style={styles.instructions}>power by 小栋同学</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#77ac98"
  },
  appName: {
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center"
  },
  start: {
    marginTop: 40,
    height: 36,
    width: 120
  },
  welcome: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    marginTop: 30
  },
  instructions: {
    textAlign: "center",
    color: "black",
    marginTop: 15,
    position: "absolute",
    bottom: 0,
    lineHeight: 40
  }
});
