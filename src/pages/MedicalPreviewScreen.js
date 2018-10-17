import React, { Component } from "react";
import PropTypes from "prop-types";
import { GetMedicalById } from "../service/Api";
import { ScrollView, StyleSheet } from "react-native";
// import userCameraList from "../components/userCameraList";
import { PutMedicalById } from "../service/Api";
import PreviewMedical from "../components/PreviewMedical";
import EditorMedical from "../components/EditorMedical";

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
      // const { navigate } = this.props.navigation;
      const { state } = this.props.navigation;
      const medicalId = state.params.medicalId;
      console.log(medicalId, "medicalId");
      GetMedicalById(medicalId)
          .then(response => response.json())
          .then(data => {
              console.log(data, "GetMedicalById");
              data.sex = [data.sex];
              this.setState({
                  userInfo: data
              });
          });
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

  onChangeUpdate = () => {
      const { update } = this.state;
      this.setState({ update: !update });
  };
  onSubmitForm = () => {
      const { update } = this.state;
      const { userInfo } = this.state;
      PutMedicalById(userInfo.id, userInfo)
          .then(response => response.json())
          .then(res => {
              console.log(res, "PutMedicalById");
          });
      console.log(update, "update");
  };
  render() {
      const { userInfo, update } = this.state;
      console.log(userInfo, "userInfo userInfo");
      return (
          <ScrollView style={styles.container}>
              {!update && (
                  <PreviewMedical
                      userInfo={userInfo}
                      onChangeUpdate={this.onChangeUpdate}
                  />
              )}
              {update && (
                  <EditorMedical
                      userInfo={userInfo}
                      onChangeUserInfo={this.onChangeUserInfo}
                      onSubmitForm={this.onSubmitForm}
                  />
              )}
          </ScrollView>
      );
  }
}

MedicalPreview.propTypes = {
    navigation: PropTypes.object
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
        backgroundColor: "#21a2c4",
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
