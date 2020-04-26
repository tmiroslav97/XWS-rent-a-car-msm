package agent.app.service.intf;

import agent.app.dto.PriceListCreateDTO;
import agent.app.model.PriceList;
import org.joda.time.DateTime;

import java.util.List;
import java.util.Optional;


public interface PriceListService {

    PriceList save(PriceList priceList);
    PriceList createPriceList(PriceListCreateDTO priceListCreateDTO);
    PriceList findById(Long id);
}
