package agent.app.controller;

import agent.app.service.intf.PriceListService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/price-list", produces = MediaType.APPLICATION_JSON_VALUE)
public class PriceListController {

    private final PriceListService priceListService;

    public PriceListController(PriceListService priceListService){
        this.priceListService = priceListService;
    }

}
