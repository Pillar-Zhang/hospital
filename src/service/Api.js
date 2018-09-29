// import { CreateMedical, getAllMedical } from "../controller/MedicalControler";
const baseUrl = "http://darrenluo.vaiwan.com:8081";
export const PostMedical = data => {
  let params = "?post=true";
  if (data["photos"].length < 1) delete data.photos;
  for (key in data) {
    if (data[key]) params = params + `&${key}=${data[key]}`;
  }
  console.log(params, "params");
  return fetch(`${baseUrl}/medicals${params}`, {
    method: "POST"
  });
};

export const GetAllMedicals = deviceId => {
  return fetch(`${baseUrl}/medicals/?deviceId=${deviceId}&pageSize=100`);
};

export const GetMedicalById = id => {
  return fetch(`${baseUrl}/medicals/${id}`);
};

export const PutMedicalById = data => {
  return fetch(`${baseUrl}/medicals/${data.id}`, {
    method: "PUT",
    body: data
  });
};

export const DeleMedicalById = id => {
  console.log(id, "DeleMedicalById id");
  return fetch(`${baseUrl}/medicals/${id}`, {
    method: "DELETE"
  });
};
