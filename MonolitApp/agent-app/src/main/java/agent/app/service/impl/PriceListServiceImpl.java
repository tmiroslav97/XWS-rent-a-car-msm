package agent.app.service.impl;

import agent.app.converter.PriceListConverter;
import agent.app.dto.PriceListCreateDTO;
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

        return priceListRepository.findByDate(date);
    }

    @Override
    public PriceList save(PriceList priceList) {
        return priceListRepository.save(priceList);
    }

    @Override
    public PriceList createPriceList(PriceListCreateDTO priceListCreateDTO) {
        PriceList priceList = PriceListConverter.toCreatePriceListFromRequest(priceListCreateDTO);
        priceList = this.priceListRepository.save(priceList);
        return priceList;
    }
}
