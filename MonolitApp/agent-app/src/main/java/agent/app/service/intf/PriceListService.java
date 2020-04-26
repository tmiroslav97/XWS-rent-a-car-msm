package agent.app.service.intf;

import agent.app.dto.PriceListCreateDTO;
import agent.app.model.PriceList;


public interface PriceListService {

    PriceList save(PriceList priceList);
    PriceList createPriceList(PriceListCreateDTO priceListCreateDTO);
    PriceList findById(Long id);
}
