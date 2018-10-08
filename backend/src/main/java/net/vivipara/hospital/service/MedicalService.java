package net.vivipara.hospital.service;

import net.vivipara.hospital.data.dto.MedicalDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MedicalService {

    List<MedicalDTO> getMedicalList(String deviceId, String search, Pageable pageable);

    MedicalDTO getMedical(int id);

    MedicalDTO createMedical(MedicalDTO medicalDTO);

    MedicalDTO modifyMedical(MedicalDTO medicalDTO);

    void deleteMedical(int id);
}
