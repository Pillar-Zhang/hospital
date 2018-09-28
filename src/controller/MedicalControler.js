// 引入model
import { MedicalModel } from "../model/MedicalModel";
import Realm from "realm";
import uuid from "../Utils.js/uuid";
import { isArray } from "lodash";
//创建表
let realm = new Realm({ schema: [MedicalModel] });

export const CreateMedical = data => {
  console.log("CreateMedical");
  // 创建病历
  return new Promise((resolve, reject) => {
    const newMedicalModel = {
      createTime: new Date().getTime(),
      updateTime: new Date().getTime(),
      userName: data.name,
      info: {
        sex: data.sex,
        age: data.age,
        phone: data.phone,
        time: data.time,
        CurrentMedicalHistory: data.CurrentMedicalHistory,
        pastHistory: data.pastHistory,
        LookAround: data.LookAround,
        TCMConstitution: data.TCMConstitution,
        TCMDiagnosis: data.TCMDiagnosis,
        DialecticalTreatment: data.DialecticalTreatment,
        PrescriptionMedication: data.PrescriptionMedication,
        photos: data.photos
      }
    };
    realm.write(() => realm.create("medical", newMedicalModel));
    resolve(newMedicalModel);
  });
};

export const getAllMedical = () => {
  // 查询所有数据
  let persons = realm.objects("Person");
  return new Promise((resolve, reject) => {
    resolve(persons);
    if (!persons || !isArray(persons)) reject("没有查到数据或者查询条件错误");
  });
};
