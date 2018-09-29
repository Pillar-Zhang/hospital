import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { SearchBar, List } from "antd-mobile-rn";
import { GetAllMedicals, DeleMedicalById } from "../service/Api";
import DeviceInfo from "react-native-device-info";

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
      value: "请输入查询病历名称",
      medicalList: [],
      deviceId: ""
    };
  }
  componentDidMount() {
    const deviceUniqueID = DeviceInfo.getUniqueID();
    console.log(deviceUniqueID, "getall");
    GetAllMedicals(deviceUniqueID)
      .then(response => response.json())
      .then(data => {
        console.log(data, "data");
        if (Array.isArray(data))
          this.setState({ medicalList: data, deviceId: deviceUniqueID });
      })
      .catch(err => {
        console.log(err, "err");
        Alert.alert(err);
      });
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

  onDeleteMedicalItem = id => {
    const { deviceId } = this.state;
    console.log(id, "delete id");
    DeleMedicalById(id)
      .then(data => {
        console.log(data, "DeleMedicalById");
        return GetAllMedicals(deviceId)
          .then(response => response.json())
          .then(data2 => {
            this.setState({ medicalList: data2 });
            console.log(data2, "GetAllMedicals");
          });
      })
      .catch(err => {
        console.log(err, "err");
        Alert.alert(err);
      });
    console.log("delete");
  };

  onSearchItem = name => {
    console.log(name, "search");
  };
  onClickMedicalItem = medicalId => {
    const { navigate } = this.props.navigation;
    navigate("MedicalPreview", { medicalId });
  };
  render() {
    const { medicalList } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.createTitle}>管理病历</Text>
          </View>
          <SearchBar
            value={this.state.value}
            placeholder="搜索"
            onSubmit={value => this.onSearchItem(value)}
            onCancel={this.clear}
            onChange={this.onChange}
            showCancelButton
          />
          <View style={styles.listContainer}>
            {medicalList.map((val, index) => {
              return (
                <View key={index} style={styles.medicalItem}>
                  <Text
                    onPress={this.onClickMedicalItem.bind(this, val.id)}
                    style={styles.medicalItemName}
                  >
                    {val.name}
                  </Text>
                  <Text
                    onPress={this.onDeleteMedicalItem.bind(this, val.id)}
                    style={styles.actionDelete}
                  >
                    删除
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
