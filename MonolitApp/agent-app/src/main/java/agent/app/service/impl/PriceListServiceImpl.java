package agent.app.service.impl;

import agent.app.model.PriceList;
import agent.app.repository.PriceListRepository;
import agent.app.service.intf.PriceListService;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriceListServiceImpl implements PriceListService {

    @Autowired
    PriceListRepository priceListRepository;


    @Override
    public List<PriceList> findByDate(DateTime date) {

        return null;
    }
}
