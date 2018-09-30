// import { CreateMedical, getAllMedical } from "../controller/MedicalControler";
const baseUrl = "http://darrenluo.vaiwan.com:8081";
export const PostMedical = data => {
  // delete data.photos;
 data.sex = Array.isArray(data.sex)?data.sex.join()||"男"
  console.log(data, "get");
  return fetch(`${baseUrl}/medicals`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

export const GetAllMedicals = deviceId => {
  return fetch(`${baseUrl}/medicals/?deviceId=${deviceId}&pageSize=100`);
};

export const GetMedicalById = id => {
  return fetch(`${baseUrl}/medicals/${id}`);
};

export const PutMedicalById = data => {
  data.sex = data.sex.join();
  console.log(data, "put");
  return fetch(`${baseUrl}/medicals`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

export const DeleMedicalById = id => {
  console.log(id, "DeleMedicalById id");
  return fetch(`${baseUrl}/medicals/${id}`, {
    method: "DELETE"
  });
};
