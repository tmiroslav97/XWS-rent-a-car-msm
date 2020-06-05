package services.app.adservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name="auth")
public interface AuthenticationClient {

    @PostMapping("/end-user/limit-num")
    Integer getAdLimitNum(String email);

    @PostMapping("/end-user/reduce-limit-num")
    Integer reduceLimitNum(String email);

    @PostMapping("/user/find-publish-user")
    Long findPublishUserByEmail(String email);

}
