package agent.app.service.intf;

import agent.app.dto.PriceListCreateDTO;
import agent.app.model.PriceList;
import org.joda.time.DateTime;

import java.util.List;


public interface PriceListService {

    List<PriceList> findByDate(DateTime date);
    PriceList save(PriceList priceList);
    PriceList createPriceList(PriceListCreateDTO priceListCreateDTO);
}
