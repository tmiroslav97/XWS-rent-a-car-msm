package services.app.adservice.client;


import org.springframework.cloud.openfeign.FeignClient;


@FeignClient(name="ad")
public interface AdClient {
}
