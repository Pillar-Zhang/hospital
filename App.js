/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator } from "react-navigation";
import React, { Component } from "react";
import Navigation from "./Navigation";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Navigation />;
  }
}
