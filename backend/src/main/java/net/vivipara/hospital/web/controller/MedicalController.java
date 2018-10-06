package net.vivipara.hospital.web.controller;

import net.vivipara.hospital.data.dto.MedicalDTO;
import net.vivipara.hospital.service.MedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicals")
public class MedicalController {

    @Autowired
    private MedicalService medicalService;

    @GetMapping
    public List<MedicalDTO> getPage(@RequestParam String deviceId,
                                    @RequestParam(required = false, defaultValue = "") String search,
                                    @PageableDefault(size = 20) Pageable pageable) {
        return medicalService.getMedicalList(deviceId, search, pageable);
    }

    @GetMapping("/{id}")
    public MedicalDTO getOne(@PathVariable int id) {
        return medicalService.getMedical(id);
    }

    @PostMapping
    public MedicalDTO create(@RequestBody MedicalDTO medicalDTO) {
        System.out.println(medicalDTO);
        return medicalService.createMedical(medicalDTO);
    }

    @PutMapping
    public MedicalDTO modify(@RequestBody MedicalDTO medicalDTO) {
        return medicalService.modifyMedical(medicalDTO);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        medicalService.deleteMedical(id);
    }
}
