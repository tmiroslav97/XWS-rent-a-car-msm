package agent.app.service.intf;

import agent.app.model.PriceList;
import org.joda.time.DateTime;

import java.util.List;


public interface PriceListService {

    List<PriceList> findByDate(DateTime date);
}
