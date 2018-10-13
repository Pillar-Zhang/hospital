package net.vivipara.hospital.data.dto;

import lombok.Data;

import java.util.List;

@Data
public class MedicalDTO {

    private Integer id;

    private String name;

    private String sex;

    private Integer age;

    private String time;

    private String currentMedicalHistory;

    private String pastHistory;

    private String lookAround;

    private String tcmConstitution;

    private String tcmDiagnosis;

    private String dialecticalTreatment;

    private String prescriptionMedication;

    private String phone;

    private List<PhotoDTO> photos;

    private String deviceId;

    private String chiefComplaint;
}
