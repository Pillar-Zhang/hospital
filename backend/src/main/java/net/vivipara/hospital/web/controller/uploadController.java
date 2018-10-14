package net.vivipara.hospital.web.controller;

import net.vivipara.hospital.uitls.UploadUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/upload")
public class uploadController {

    @GetMapping("/getUpToken")
    public String getUpToken() {
        return UploadUtils.getUpToken();
    }

    @PostMapping("/updatePhoto")
    public Map<String, Object> photo(@RequestParam("photo") MultipartFile file) {
        Map<String, Object> result = new HashMap<>();
        try {
            if (file == null) {
                result.put("code", 9999);
                result.put("errorMessage", "上传图片为空");
                return result;
            }
            String path = UploadUtils.uploadFile(file);
            if (path == null) {
                result.put("code", 9999);
                result.put("errorMessage", "上传失败");
            } else {
                result.put("code", 200);
                result.put("path", path);
            }
        } catch (Exception e) {
            result.put("code", 9999);
            result.put("errorMessage", e.getMessage());
        }
        return result;
    }

    @PostMapping("/updatePhotos")
    public Map<String, Object> photos(@RequestParam("photos") MultipartFile[] files) {
        Map<String, Object> result = new HashMap<>();
        if(files == null){
            result.put("code", 9999);
            result.put("errorMessage", "上传数据为空");
        }
        result.put("code", 9999);
        result.put("errorMessage", "接口未实现");
        return result;
    }

}
