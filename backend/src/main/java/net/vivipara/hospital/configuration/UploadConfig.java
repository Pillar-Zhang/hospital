package net.vivipara.hospital.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Data
@ConfigurationProperties(prefix = "upload-server.qi-niu")
public class UploadConfig {
    private String access;

    private String secret;

    private String bucket;
}
