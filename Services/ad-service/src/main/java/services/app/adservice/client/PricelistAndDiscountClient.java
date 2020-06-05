package services.app.adservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import services.app.adservice.dto.pricelist.PriceListCreateDTO;


@FeignClient(name="pad")
public interface PricelistAndDiscountClient {

    @PostMapping("/pricelist/create-pricelist")
    Long createPricelist(PriceListCreateDTO priceListCreateDTO);

    @PostMapping("/pricelist/find-pricelist")
    Long findPriceList(Long id);

}
