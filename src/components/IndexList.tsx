import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Grid } from "antd-mobile-rn";

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
  text: `Name${i}`
}));

export default class BasicGridExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView>
        <View style={[{ margin: 10 }]}>
          <Text>健康档案</Text>
        </View>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} hasLine={false} />
        </View>

        <View style={[{ margin: 10 }]}>
          <Text>电子病历</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          onClick={(_el: any, index: any) => alert(index)}
        />
        <View style={[{ margin: 10 }]}>
          <Text>处方管理</Text>
        </View>
        <Grid data={data} columnNum={3} itemStyle={{ height: 150 }} />
      </ScrollView>
    );
  }
}
