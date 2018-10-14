import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "antd-mobile-rn";
import stringToDate from "../Utils.js/stringToDate";

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
    },
    baseInfo: {
        height: 40,
        lineHeight: 40,
        fontSize: 16
    }
});
export default class PreviewMedical extends React.Component {
    constructor() {
        super();
    }
  static propTypes = {
      userInfo: PropTypes.object,
      onChangeUpdate: PropTypes.func
  };

  onChangeStatus = () => {};
  render() {
      const { userInfo, onChangeUpdate } = this.props;
      let time = 0;
      if (userInfo["time"]) time = stringToDate(userInfo["time"]);
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
                  <Button onClick={onChangeUpdate} style={styles.saveForm}>
                      <Text style={styles.submitText}>修改</Text>
                  </Button>
              </View>
              <View style={styles.row}>
                  <Text style={styles.name}>姓名：</Text>
                  <Text style={styles.baseInfo}>{userInfo["name"]}</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.name}>性别：</Text>
                  <Text style={styles.baseInfo}>{userInfo["sex"]}</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.name}>年龄：</Text>
                  <Text style={styles.baseInfo}>{userInfo["age"]}</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.name}>电话：</Text>
                  <Text style={styles.baseInfo}>{userInfo["phone"]}</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.name}>就诊时间：</Text>
                  <Text style={styles.baseInfo}>{time}</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                  <Text style={styles.createTitle}>病情统计</Text>
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>主诉：</Text>
                  <Text>{userInfo["ChiefComplaint"]}</Text>
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>现病史：</Text>
                  <Text>{userInfo["currentMedicalHistory"]}</Text>
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>既往史：</Text>
                  <Text>{userInfo["pastHistory"]}</Text>
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>望闻切诊：</Text>
                  <Text>{userInfo["lookAround"]}</Text>
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>中医体质：</Text>
                  <Text>{userInfo["tcmConstitution"]}</Text>
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>中医诊断：</Text>
                  <Text>{userInfo["tcmDiagnosis"]}</Text>
              </View>
              <View style={styles.TextareaView}>
                  <Text style={styles.name}>辩证治疗：</Text>
                  <Text>{userInfo["dialecticalTreatment"]}</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                  <Text style={styles.createTitle}>处方</Text>
              </View>
              <View style={Object.assign({}, styles.row, { height: 150 })}>
                  <Text style={styles.name}>处方用药：</Text>
                  <Text>{userInfo["prescriptionMedication"]}</Text>
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
                  {
                      //userInfo["photos"]
                  }
              </View>
          </React.Fragment>
      );
  }
}
