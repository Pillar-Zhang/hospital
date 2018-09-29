import React, { Component } from "react";
import { GetMedicalById } from "../service/Api";
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
import { PutMedicalById } from "../service/Api";
import uuid from "../Utils.js/uuid";

export default class MedicalPreview extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "xxx"
      },
      update: false
    };
  }
  static navigationOptions = {
    title: "个人病历信息"
  };
  componentDidMount() {
    const { navigate } = this.props.navigation;
    console.log(navigate, "navigate");
    // GetMedicalById(medicalId).then(res => {
    //   if (res.data)
    //     this.setState({
    //       info: res.data
    //     });
    // });
  }
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
    const { info, update } = this.state;
    if (!update) return this.setState({ update: true });
    console.log(update, "update");
  };
  render() {
    const { userInfo, update } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: "#21a2c4",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.createTitle}>
            {userInfo["name"] || "xxx"}
            病历信息
          </Text>
          <Text onPress={this.onSubmitForm} style={styles.saveForm}>
            {update ? "保存" : "修改"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>姓名：</Text>
          <InputItem
            editable={update}
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
            disabled={!update}
            value={userInfo["age"]}
            style={styles.input}
            onChange={value => this.onChangeUserInfo("age", value)}
            placeholder="年龄"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>电话：</Text>
          <InputItem
            disabled={!update}
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
            editable={update}
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
            editable={update}
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
            editable={update}
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
            editable={update}
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
            editable={update}
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
            editable={update}
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
            editable={update}
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
            files={userInfo["photos"]}
            multiple
          />
        </View>
      </ScrollView>
    );
  }
}

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