package services.app.pricelistanddiscountservice.client;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name="auth")
public interface AuthenticationClient {

    @PostMapping("/end-user/limit-num")
    Integer getAdLimitNum(String email);

    @PostMapping("/user/find-publish-user")
    Long findPublishUserByEmail(String email);

}
