import React, { Component } from "react";
import { ScrollView, StyleSheet, Alert } from "react-native";
import EditorMedical from "../components/EditorMedical";
import DeviceInfo from "react-native-device-info";
import { PostMedical } from "../service/Api";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff"
    }
});

export default class CreateMedicalRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "",
                sex: ["男"],
                photos: []
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

  componentDidMount() {
      const deviceUniqueID = DeviceInfo.getUniqueID();
      console.log(deviceUniqueID, "cretate");
      const { userInfo } = this.state;
      this.setState({
          userInfo: Object.assign({}, userInfo, { deviceId: deviceUniqueID })
      });
  }

  checkInfoIntegrity = data => {
      if (!data.name || !data.sex || !data.phone || !data.time)
          return Alert.alert("提示", "请完整的填写个人信息", null, {
              cancelable: false
          });
      return true;
  };

  onSubmitForm = () => {
      console.log("click submit");
      const { userInfo } = this.state;
      const integrity = this.checkInfoIntegrity(userInfo);
      if (!integrity) return;
      PostMedical(userInfo)
          .then(response => response.json())
          .then(data => {
              console.log("success");
              console.log(data, "success data");
          })
          .catch(err => {
              console.log(err, "err");
              // Alert.alert(err);
          });
  };

  render() {
      const { userInfo } = this.state;
      return (
          <ScrollView style={styles.container}>
              <EditorMedical
                  userInfo={userInfo}
                  onSubmitForm={this.onSubmitForm}
                  onChangeUserInfo={this.onChangeUserInfo}
              />
          </ScrollView>
      );
  }
}
