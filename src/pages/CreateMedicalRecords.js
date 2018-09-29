import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  InputItem,
  Picker,
  List,
  TextareaItem,
  DatePicker,
  ImagePicker,
  WhiteSpace
} from "antd-mobile-rn";
import userCameraList from "../components/userCameraList";
import CameralImagePicker from "react-native-image-picker"; //第三方相机
import { PostMedical, DeleMedicalById } from "../service/Api";
import uuid from "../Utils.js/uuid";
import DeviceInfo from "react-native-device-info";
const photoOptions = {
  //底部弹出框选项
  title: "请选择",
  cancelButtonTitle: "取消",
  takePhotoButtonTitle: "拍照",
  chooseFromLibraryButtonTitle: "选择相册",
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  createTitle: {
    height: 40,
    lineHeight: 40,
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
  },
  TextareaView: {
    flexDirection: "row",
    marginTop: 15,
    height: 150
  },
  Textarea: {
    paddingTop: 10,
    width: 200,
    borderColor: "#21a2c4",
    borderWidth: 1,
    height: 100
  },
  saveForm: {
    color: "#ffffff",
    height: 40,
    width: 40,
    lineHeight: 40,
    paddingRight: 10,
    letterSpacing: 1
  }
});

export default class CreateMedicalRecords extends React.Component {
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
    console.log(deviceUniqueID, "deviceUniqueID");
  }

  handleFileChange = () => {
    const { userInfo } = this.state;
    const { navigate } = this.props.navigation;
    console.log("showImagePicker android");
    CameralImagePicker.showImagePicker(photoOptions, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        console.log(response, "response");
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(source, "source");
        this.setState({
          userInfo: Object.assign({}, userInfo, {
            photos: [
              ...userInfo.photos,
              {
                url: response.uri,
                id: uuid
              }
            ]
          })
        });
      }
    });
  };

  onSubmitForm = () => {
    console.log("click submit");
    const { userInfo } = this.state;
    PostMedical(userInfo).then(data => {
      console.log("success");
      console.log(data, "data");
    });
  };

  onChangeImage = (files, operationType, index) => {
    const { userInfo } = this.state;
    const { photos } = userInfo;
    if (operationType === "remove") {
      newPhotos = [...photos];
      newPhotos.splice(index, 1);
      this.setState({
        userInfo: Object.assign({}, userInfo, {
          photos: newPhotos
        })
      });
    }
  };
  render() {
    const { userInfo } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: "#21a2c4",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.createTitle}>个人信息</Text>
          <Text onPress={this.onSubmitForm} style={styles.saveForm}>
            保存
          </Text>
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
          <Text style={styles.name}>年龄：</Text>
          <InputItem
            type="number"
            value={userInfo["age"]}
            style={styles.input}
            onChange={value => this.onChangeUserInfo("age", value)}
            placeholder="年龄"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>电话：</Text>
          <InputItem
            type="phone"
            value={userInfo["phone"]}
            style={styles.input}
            onChange={value => this.onChangeUserInfo("phone", value)}
            placeholder="电话"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>就诊时间：</Text>
          <DatePicker
            value={userInfo["time"]}
            mode="date"
            title="选择时间"
            minDate={new Date(2018, 1, 1)}
            maxDate={new Date(2026, 12, 31)}
            onChange={value => this.onChangeUserInfo("time", value)}
            format="YYYY-MM-DD"
          >
            <List.Item
              style={{ width: 250, textAlign: "center" }}
              arrow="horizontal"
            >
              选择日期
            </List.Item>
          </DatePicker>
        </View>
        {
          // <List.Item arrow="horizontal">Select Date</List.Item>
        }
        <View style={{ marginTop: 20 }}>
          <Text style={styles.createTitle}>主诉</Text>
        </View>
        <View style={styles.TextareaView}>
          <Text style={styles.name}>现病史：</Text>
          <TextareaItem
            rows={4}
            count={100}
            placeholder="请输入..."
            value={userInfo["CurrentMedicalHistory"]}
            onChange={value =>
              this.onChangeUserInfo("CurrentMedicalHistory", value)
            }
            style={styles.Textarea}
          />
        </View>
        <View style={styles.TextareaView}>
          <Text style={styles.name}>既往史：</Text>
          <TextareaItem
            rows={4}
            count={100}
            placeholder="请输入..."
            style={styles.Textarea}
            value={userInfo["pastHistory"]}
            onChange={value => this.onChangeUserInfo("pastHistory", value)}
          />
        </View>
        <View style={styles.TextareaView}>
          <Text style={styles.name}>望闻切诊：</Text>
          <TextareaItem
            rows={4}
            count={100}
            placeholder="请输入..."
            autoHeight
            style={styles.Textarea}
            value={userInfo["LookAround"]}
            onChange={value => this.onChangeUserInfo("LookAround", value)}
          />
        </View>
        <View style={styles.TextareaView}>
          <Text style={styles.name}>中医体质：</Text>
          <TextareaItem
            rows={4}
            count={100}
            placeholder="请输入..."
            style={styles.Textarea}
            value={userInfo["TCMConstitution"]}
            onChange={value => this.onChangeUserInfo("TCMConstitution", value)}
          />
        </View>
        <View style={styles.TextareaView}>
          <Text style={styles.name}>中医诊断：</Text>
          <TextareaItem
            rows={4}
            count={100}
            placeholder="请输入..."
            style={styles.Textarea}
            value={userInfo["TCMDiagnosis"]}
            onChange={value => this.onChangeUserInfo("TCMDiagnosis", value)}
          />
        </View>
        <View style={styles.TextareaView}>
          <Text style={styles.name}>辩证治疗：</Text>
          <TextareaItem
            rows={4}
            count={100}
            placeholder="请输入..."
            style={styles.Textarea}
            value={userInfo["DialecticalTreatment"]}
            onChange={value =>
              this.onChangeUserInfo("DialecticalTreatment", value)
            }
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.createTitle}>处方</Text>
        </View>
        <View style={Object.assign({}, styles.row, { height: 150 })}>
          <Text style={styles.name}>处方用药：</Text>
          <TextareaItem
            rows={4}
            count={100}
            placeholder="请输入..."
            style={styles.Textarea}
            value={userInfo["PrescriptionMedication"]}
            onChange={value =>
              this.onChangeUserInfo("PrescriptionMedication", value)
            }
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.createTitle}>病情采集</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            justifyContent: "space-between",
            alignContent: "center"
          }}
        >
          <ImagePicker
            onAddImageClick={this.handleFileChange}
            onChange={this.onChangeImage}
            files={userInfo["photos"]}
            multiple
          />
        </View>
      </ScrollView>
    );
  }
}
