// tslint:disable:jsx-no-multiline-js
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Drawer, List, WhiteSpace } from "antd-mobile-rn";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerButton: {
    width: 60
  }
});

export interface DrawerProps {
  showDrawer?: boolean;
  closeDrawer?: (el: null) => void;
  openDrawer?: (el: null) => void;
}

export default class DrawerExample extends React.Component<DrawerProps, any> {
  drawer: any;

  onOpenChange = (isOpen: any) => {
    /* tslint:disable: no-console */
    if (isOpen) return this.props.openDrawer();
    this.props.closeDrawer();
    console.log("是否打开了 Drawer", isOpen.toString());
  };

  render() {
    const itemArr = Array.apply(null, Array(20))
      .map(function(_: any, i: any) {
        return i;
      })
      .map((_i: any, index: any) => {
        return (
          <List.Item
            key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >
            <Text>Categories - {index}</Text>
          </List.Item>
        );
      });

    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView style={[styles.container as any]}>
        <List>{itemArr}</List>
      </ScrollView>
    );

    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={this.props.showDrawer}
        drawerRef={(el: any) => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc"
      >
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <WhiteSpace />
        </View>
      </Drawer>
    );
  }
}
