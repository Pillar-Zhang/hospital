import Realm from "realm";

export const MedicalModel = {
  name: "medical",
  properties: {
    userName: "string"
    // pastHistory: "string"
  }
};

// info: {
//     sex: Realm.Types.LIST, // 性别 default ["男"]
//     age: Realm.Types.INT, //年龄
//     phone: Realm.Types.INT, //电话
//     time: Realm.Types.INT, //就诊时间
//     CurrentMedicalHistory: Realm.Types.STRING, //现病史
//     pastHistory: Realm.Types.STRING, //既往史
//     LookAround: Realm.Types.STRING, //望闻切诊
//     TCMConstitution: Realm.Types.STRING, //中医体质
//     TCMDiagnosis: Realm.Types.STRING, //中医诊断
//     DialecticalTreatment: Realm.Types.STRING, //辨证治疗
//     PrescriptionMedication: Realm.Types.STRING, //处方用药
//     photos: Realm.Types.LIST //上传患者图片
//   }
