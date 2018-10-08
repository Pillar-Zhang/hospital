package net.vivipara.hospital.data.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer uuid;

    private String id;

    private String url;
}
