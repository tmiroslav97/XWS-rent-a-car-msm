package services.app.pricelistanddiscountservice.service.intf;


import services.app.pricelistanddiscountservice.model.DiscountList;

import java.util.List;

public interface DiscountListService {

    DiscountList findById(Long id);
    List<DiscountList> findAll();
    DiscountList save(DiscountList discountList);
    void delete(DiscountList discountList);
    DiscountList editPriceList(DiscountList discountList);
    Integer deleteById(Long id);

}
