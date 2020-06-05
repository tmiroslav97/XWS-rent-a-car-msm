package services.app.pricelistanddiscountservice.client;

import org.springframework.cloud.openfeign.FeignClient;


@FeignClient(name="pad")
public interface PricelistAndDiscountClient {


}
