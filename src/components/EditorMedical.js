import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import {
    InputItem,
    Picker,
    List,
    TextareaItem,
    DatePicker,
    ImagePicker,
    Button
} from "antd-mobile-rn";
import CameralImagePicker from "react-native-image-picker"; //第三方相机
import uuid from "../Utils.js/uuid";
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
        letterSpacing: 1,
        backgroundColor: "#21a2c4"
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
        height: 40,
        width: 80,
        paddingRight: 10,
        backgroundColor: "#21a2c4",
        borderColor: "transparent"
    },
    submitText: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 40,
        letterSpacing: 1
    }
});
export default class EditorMedical extends React.Component {
    constructor() {
        super();
    }
  static propTypes = {
      userInfo: PropTypes.object,
      onChangeUserInfo: PropTypes.func,
      onSubmitForm: PropTypes.func
  };

  onChangeImage = (files, operationType, index) => {
      const { userInfo, onChangeUserInfo } = this.props;
      const { photos } = userInfo;
      if (operationType === "remove") {
          const newPhotos = [...photos];
          newPhotos.splice(index, 1);
          onChangeUserInfo("photos", newPhotos);
      }
  };

  handleFileChange = () => {
      const { userInfo, onChangeUserInfo } = this.props;
      // const { navigate } = this.props.navigation;
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
              onChangeUserInfo("photos", [
                  ...userInfo.photos,
                  {
                      url: response.uri,
                      id: uuid
                  }
              ]);
          }
      });
  };
  render() {
      const { userInfo, onChangeUserInfo, onSubmitForm } = this.props;
      return (
          <React.Fragment>
              <View
                  style={{
                      backgroundColor: "#21a2c4",
                      flexDirection: "row",
                      justifyContent: "space-between"
                  }}
              >
                  <Text style={styles.createTitle}>个人信息</Text>
                  <Button onClick={onSubmitForm} style={styles.saveForm}>
                      <Text style={styles.submitText}>保存</Text>
                  </Button>
              </View>
              <View style={styles.row}>
                  <Text style={styles.name}>姓名：</Text>
                  <InputItem
                      value={userInfo["name"]}
                      style={styles.input}
                      onChange={value => onChangeUserInfo("name", value)}
                      placeholder="姓名"
                  />
              </View>
              <View style={styles.row}>
                  <Text style={styles.name}>性别：</Text>
                  <Picker
                      data={[{ label: "男", value: "男" }, { label: "女", value: "女" }]}
                      cols={2}
                      value={userInfo["sex"]}
                      onChange={value => onChangeUserInfo("sex", value)}
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
                      onChange={value => onChangeUserInfo("age", value)}
                      placeholder="年龄"
                  />
              </View>
              <View style={styles.row}>
                  <Text style={styles.name}>电话：</Text>
                  <InputItem
                      type="phone"
                      value={userInfo["phone"]}
                      style={styles.input}
                      onChange={value => onChangeUserInfo("phone", value)}
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
                      onChange={value => onChangeUserInfo("time", value)}
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
              <View style={{ marginTop: 20 }}>
                  <Text style={styles.createTitle}>病情统计</Text>
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>主诉：</Text>
                  <TextareaItem
                      rows={4}
                      count={100}
                      placeholder="请输入..."
                      value={userInfo["ChiefComplaint"]}
                      onChange={value => onChangeUserInfo("ChiefComplaint", value)}
                      style={styles.Textarea}
                  />
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>现病史：</Text>
                  <TextareaItem
                      rows={4}
                      count={100}
                      placeholder="请输入..."
                      value={userInfo["currentMedicalHistory"]}
                      onChange={value => onChangeUserInfo("currentMedicalHistory", value)}
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
                      onChange={value => onChangeUserInfo("pastHistory", value)}
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
                      value={userInfo["lookAround"]}
                      onChange={value => onChangeUserInfo("lookAround", value)}
                  />
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>中医体质：</Text>
                  <TextareaItem
                      rows={4}
                      count={100}
                      placeholder="请输入..."
                      style={styles.Textarea}
                      value={userInfo["tcmConstitution"]}
                      onChange={value => onChangeUserInfo("tcmConstitution", value)}
                  />
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>中医诊断：</Text>
                  <TextareaItem
                      rows={4}
                      count={100}
                      placeholder="请输入..."
                      style={styles.Textarea}
                      value={userInfo["tcmDiagnosis"]}
                      onChange={value => onChangeUserInfo("tcmDiagnosis", value)}
                  />
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>辩证治疗：</Text>
                  <TextareaItem
                      rows={4}
                      count={100}
                      placeholder="请输入..."
                      style={styles.Textarea}
                      value={userInfo["dialecticalTreatment"]}
                      onChange={value => onChangeUserInfo("dialecticalTreatment", value)}
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
                      value={userInfo["prescriptionMedication"]}
                      onChange={value =>
                          onChangeUserInfo("prescriptionMedication", value)
                      }
                  />
              </View>
              <View style={{ marginTop: 20 }}>
                  <Text style={styles.createTitle}>图片采集</Text>
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
          </React.Fragment>
      );
  }
}
