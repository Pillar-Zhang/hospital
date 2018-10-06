package net.vivipara.hospital.data.mapper;

import net.vivipara.hospital.data.domain.Medical;
import net.vivipara.hospital.data.dto.MedicalDTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MedicalMapper {

    Medical to(MedicalDTO medicalDTO);

    MedicalDTO from(Medical medical);

    List<Medical> toList(List<MedicalDTO> medicalDTOList);

    List<MedicalDTO> fromList(List<Medical> medicalList);
}
