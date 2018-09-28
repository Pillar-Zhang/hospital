import { CreateMedical, getAllMedical } from "../controller/MedicalControler";

export const PostMedical = data => {
  return CreateMedical(data);
};

export const getAllMedicals = () => {
  return getAllMedical();
};
