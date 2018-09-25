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
        sex: ["男"]
      },
      files: Array.from(new Array(5)).map((val, index) => ({
        url: "https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png",
        id: index
      })),
      selectFiles: []
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

  handleFileChange = () => {
    const { selectFiles, files } = this.state;
    this.setState({
      selectFiles: [...selectFiles, files[0]]
    });
  };

  onSubmitForm = () => {
    console.log(this.state.userInfo, "userInfo");
  };
  render() {
    const { userInfo, selectFiles } = this.state;
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
            value={userInfo["age"]}
            style={styles.input}
            onChange={value => this.onChangeUserInfo("age", value)}
            placeholder="年龄"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>电话：</Text>
          <InputItem
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
            files={selectFiles}
            multiple
          />
        </View>
      </ScrollView>
    );
  }
}
