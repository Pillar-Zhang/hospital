package net.vivipara.hospital.service.impl;

import net.vivipara.hospital.data.domain.Medical;
import net.vivipara.hospital.data.dto.MedicalDTO;
import net.vivipara.hospital.data.mapper.MedicalMapper;
import net.vivipara.hospital.data.repository.MedicalRepository;
import net.vivipara.hospital.service.MedicalService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalServiceImpl implements MedicalService {

    @Autowired
    private MedicalRepository medicalRepository;
    @Autowired
    private MedicalMapper medicalMapper;

    @Override
    public List<MedicalDTO> getMedicalList(String deviceId, String search, Pageable pageable) {
        List<Medical> medicalList;
        if (StringUtils.isBlank(search)) {
            medicalList = medicalRepository.findMedicalsByDeviceId(deviceId, pageable);
        } else {
            medicalList = medicalRepository.findMedicalsByDeviceIdAndNameContaining(deviceId, search, pageable);
        }

        List<MedicalDTO> medicalDTOList = medicalMapper.fromList(medicalList);

        return medicalDTOList;
    }

    @Override
    public MedicalDTO getMedical(int id) {
        Medical medical = medicalRepository.findById(id).get();
        MedicalDTO medicalDTO = medicalMapper.from(medical);

        return medicalDTO;
    }

    @Override
    public MedicalDTO createMedical(MedicalDTO medicalDTO) {
        Medical medical = medicalMapper.to(medicalDTO);
        Medical savedMedical = medicalRepository.save(medical);

        return medicalMapper.from(savedMedical);
    }

    @Override
    public MedicalDTO modifyMedical(MedicalDTO medicalDTO) {
        Medical medical = medicalMapper.to(medicalDTO);
        Medical modifiedMedical = medicalRepository.save(medical);

        return medicalMapper.from(modifiedMedical);
    }

    @Override
    public void deleteMedical(int id) {
        medicalRepository.deleteById(id);
    }
}
