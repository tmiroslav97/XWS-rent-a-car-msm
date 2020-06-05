package services.app.adsearchservice.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name="ad-search")
public interface AdSearchClient {
}
