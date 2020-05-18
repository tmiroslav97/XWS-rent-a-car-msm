package gateway.zuul.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

@FeignClient(name="auth")
public interface AuthClient {

    @GetMapping("/verify")
    boolean verify(HttpServletRequest request);
}
