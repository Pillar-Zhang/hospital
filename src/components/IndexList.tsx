import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Grid, Button } from "antd-mobile-rn";

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
  text: `Name${i}`
}));

const styles = StyleSheet.create({
  CommonlyUsed: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  usedItem: {
    padding: 8
  },
  usedText: {
    fontSize: 12,
    marginTop: 5,
    color: "#21a2c4"
  },
  iconfont: {
    fontFamily: "iconfont",
    fontSize: 30,
    color: "#21a2c4"
  }
});

export interface indexList {
  Medical: (name?: String) => void;
}
export default class BasicGridExample extends React.Component<indexList, any> {
  onclickMedicalItem = (index: number) => {
    console.log(index);
  };
  render() {
    console.log(this.props);
    return (
      <ScrollView>
        <View style={[{ margin: 10 }]}>
          <Text>健康档案</Text>
        </View>
        <View
          style={[
            {
              flexDirection: "row"
            }
          ]}
        >
          <View style={styles.CommonlyUsed}>
            <Text
              onPress={this.props.navigate.bind(this, "CreateRecord")}
              style={styles.iconfont}
            >
              &#xe7f3;
            </Text>
            <Text
              onPress={this.props.navigate.bind(this, "Medical")}
              style={styles.usedText}
            >
              新建病历
            </Text>
          </View>
          <View style={styles.CommonlyUsed}>
            <Text
              onPress={this.props.navigate.bind(this, "Medical")}
              style={styles.iconfont}
            >
              &#xe60a;
            </Text>
            <Text
              onPress={this.props.navigate.bind(this, "Medical")}
              style={styles.usedText}
            >
              管理病历
            </Text>
          </View>

          <View style={styles.CommonlyUsed}>
            <Text style={styles.iconfont}>&#xe7cb;</Text>
            <Text style={styles.usedText}>化验记录</Text>
          </View>
          <View style={styles.CommonlyUsed}>
            <Text style={styles.iconfont}>&#xe7d8;</Text>
            <Text style={styles.usedText}>药方统计</Text>
          </View>
        </View>
        <View style={[{ margin: 10 }]}>
          <Text>电子病历</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          onClick={(_el: any, index: any) => this.onclickMedicalItem}
        />
        <View style={[{ margin: 10 }]}>
          <Text>处方管理</Text>
        </View>
        <Grid data={data} columnNum={3} itemStyle={{ height: 150 }} />
      </ScrollView>
    );
  }
}
