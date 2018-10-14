package net.vivipara.hospital.uitls;

import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import net.vivipara.hospital.configuration.UploadConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

@Component
public class UploadUtils {

    private static UploadConfig uploadConfig;

    @Autowired
    public void setUploadConfig(UploadConfig uploadConfig) {
        UploadUtils.uploadConfig = uploadConfig;
    }

    public static String getUpToken() {
        try {
            return Auth.create(uploadConfig.getAccess(), uploadConfig.getSecret()).uploadToken(uploadConfig.getBucket());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String uploadFile(MultipartFile file) throws Exception {
        if (uploadConfig == null) {
            System.out.println("UploadUtils uploadConfig 注入未成功");
            return null;
        }
        String upToken = getUpToken();
        if (upToken == null)
            throw new Exception("upToken 获取失败！");
        //构造一个带指定Zone对象的配置类.其他参数参考类注释
        UploadManager uploadManager = new UploadManager(new Configuration(Zone.zone1()));
        InputStream inputStream = file.getInputStream();
        try {
            Response response = uploadManager.put(inputStream, null, upToken, null, null);
            //解析上传成功的结果
            DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
            return putRet.key;
        } catch (QiniuException ex) {
            Response r = ex.response;
            System.err.println(r.toString());
            try {
                System.err.println(r.bodyString());
            } catch (QiniuException ex2) {
                ex2.printStackTrace();
            }
        }
        return null;
    }

}
