package net.vivipara.hospital.data.domain;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Entity
@Data
public class Medical {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @OneToMany(cascade = CascadeType.ALL)
    private List<Photo> photos;

    private String deviceId;

    @CreationTimestamp
    private LocalDateTime createTime;

    @UpdateTimestamp
    private LocalDateTime lastModifyTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getCurrentMedicalHistory() {
        return currentMedicalHistory;
    }

    public void setCurrentMedicalHistory(String currentMedicalHistory) {
        this.currentMedicalHistory = currentMedicalHistory;
    }

    public String getPastHistory() {
        return pastHistory;
    }

    public void setPastHistory(String pastHistory) {
        this.pastHistory = pastHistory;
    }

    public String getLookAround() {
        return lookAround;
    }

    public void setLookAround(String lookAround) {
        this.lookAround = lookAround;
    }

    public String getTcmConstitution() {
        return tcmConstitution;
    }

    public void setTcmConstitution(String tcmConstitution) {
        this.tcmConstitution = tcmConstitution;
    }

    public String getTcmDiagnosis() {
        return tcmDiagnosis;
    }

    public void setTcmDiagnosis(String tcmDiagnosis) {
        this.tcmDiagnosis = tcmDiagnosis;
    }

    public String getDialecticalTreatment() {
        return dialecticalTreatment;
    }

    public void setDialecticalTreatment(String dialecticalTreatment) {
        this.dialecticalTreatment = dialecticalTreatment;
    }

    public String getPrescriptionMedication() {
        return prescriptionMedication;
    }

    public void setPrescriptionMedication(String prescriptionMedication) {
        this.prescriptionMedication = prescriptionMedication;
    }

    public List<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(List<Photo> photos) {
        this.photos = photos;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getLastModifyTime() {
        return lastModifyTime;
    }

    public void setLastModifyTime(LocalDateTime lastModifyTime) {
        this.lastModifyTime = lastModifyTime;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Medical medical = (Medical) o;
        return Objects.equals(id, medical.id) &&
                Objects.equals(name, medical.name) &&
                Objects.equals(sex, medical.sex) &&
                Objects.equals(age, medical.age) &&
                Objects.equals(time, medical.time) &&
                Objects.equals(currentMedicalHistory, medical.currentMedicalHistory) &&
                Objects.equals(pastHistory, medical.pastHistory) &&
                Objects.equals(lookAround, medical.lookAround) &&
                Objects.equals(tcmConstitution, medical.tcmConstitution) &&
                Objects.equals(tcmDiagnosis, medical.tcmDiagnosis) &&
                Objects.equals(dialecticalTreatment, medical.dialecticalTreatment) &&
                Objects.equals(prescriptionMedication, medical.prescriptionMedication) &&
                Objects.equals(phone, medical.phone) &&
                Objects.equals(photos, medical.photos) &&
                Objects.equals(deviceId, medical.deviceId) &&
                Objects.equals(createTime, medical.createTime) &&
                Objects.equals(lastModifyTime, medical.lastModifyTime);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, sex, age, time, currentMedicalHistory, pastHistory, lookAround, tcmConstitution, tcmDiagnosis, dialecticalTreatment, prescriptionMedication, phone, photos, deviceId, createTime, lastModifyTime);
    }

    @Override
    public String toString() {
        return "Medical{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", age=" + age +
                ", time='" + time + '\'' +
                ", currentMedicalHistory='" + currentMedicalHistory + '\'' +
                ", pastHistory='" + pastHistory + '\'' +
                ", lookAround='" + lookAround + '\'' +
                ", tcmConstitution='" + tcmConstitution + '\'' +
                ", tcmDiagnosis='" + tcmDiagnosis + '\'' +
                ", dialecticalTreatment='" + dialecticalTreatment + '\'' +
                ", prescriptionMedication='" + prescriptionMedication + '\'' +
                ", phone='" + phone + '\'' +
                ", photos=" + photos +
                ", deviceId='" + deviceId + '\'' +
                ", createTime=" + createTime +
                ", lastModifyTime=" + lastModifyTime +
                '}';
    }
}