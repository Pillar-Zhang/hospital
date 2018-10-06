package net.vivipara.hospital.data.repository;

import net.vivipara.hospital.data.domain.Medical;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalRepository extends PagingAndSortingRepository<Medical, Integer> {
    List<Medical> findMedicalsByDeviceId(String deviceId, Pageable pageable);

    List<Medical> findMedicalsByDeviceIdAndNameContaining(String deviceId, String search, Pageable pageable);
}
