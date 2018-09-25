import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  cameraList: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 30,
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  photoItem: {
    height: 186,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  itemPhoto: {
    height: 150,
    width: 200,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  itemText: {
    color: "red",
    lineHeight: 36,
    height: 36,
    textAlign: "center"
  }
});

export default class userCameraListScreen extends Component {
  static navigationOptions = {
    title: "选择上传"
  };
  render() {
    const { navigate } = this.props.navigation;
    const { state } = this.props.navigation;
    const photos = state.params.data || [];
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.cameraList}>
          {photos.map((photo, index) => {
            return (
              <View key={index} style={styles.photoItem}>
                <Image
                  resizeMode="stretch"
                  source={{ uri: photo.uri }}
                  style={styles.itemPhoto}
                />
                <Text style={styles.itemText}>{photo.filename}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
