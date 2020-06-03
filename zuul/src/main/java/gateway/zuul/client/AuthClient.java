package gateway.zuul.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name="auth")
public interface AuthClient {

    @GetMapping("/verify")
    boolean verify();
}
