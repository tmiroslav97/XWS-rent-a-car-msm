package services.app.pricelistanddiscountservice.service.intf;

import services.app.pricelistanddiscountservice.model.PriceList;

import java.util.List;

public interface PriceListService {

    PriceList findById(Long id);
    List<PriceList> findAll();
    PriceList save(PriceList priceList);
    void delete(PriceList priceList);
    PriceList editPriceList(PriceList priceList);
    Integer deleteById(Long id);

}
