package net.vivipara.hospital.data.domain;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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
}