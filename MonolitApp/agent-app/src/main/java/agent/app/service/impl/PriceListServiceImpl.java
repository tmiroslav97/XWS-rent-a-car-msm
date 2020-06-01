package agent.app.service.impl;

import agent.app.converter.PriceListConverter;
import agent.app.dto.PriceListCreateDTO;
import agent.app.exception.ExistsException;
import agent.app.exception.NotFoundException;
import agent.app.model.PriceList;
import agent.app.model.User;
import agent.app.repository.PriceListRepository;
import agent.app.service.intf.CarService;
import agent.app.service.intf.PriceListService;
import agent.app.service.intf.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PriceListServiceImpl implements PriceListService {

    @Autowired
    PriceListRepository priceListRepository;

    @Autowired
    private UserService userService;

    @Override
    public PriceList findById(Long id) {
        return priceListRepository.findById(id).orElseThrow(() -> new NotFoundException("Cenovnik ne postoji."));
    }

    @Override
    public List<PriceList> findAll() {
        return priceListRepository.findAll();
    }

    @Override
    public PriceList save(PriceList priceList) {
        if(priceListRepository.existsById(priceList.getId())){
            throw new ExistsException(String.format("Cenovnik vec postoji."));
        }
        return priceListRepository.save(priceList);
    }

    @Override
    public void delete(PriceList priceList) {
        priceListRepository.delete(priceList);
    }

    @Override
    public PriceList createPriceList(PriceListCreateDTO priceListCreateDTO) {
        PriceList priceList = PriceListConverter.toCreatePriceListFromRequest(priceListCreateDTO);
        User user = userService.findByEmail(priceListCreateDTO.getPublisherUsername());

        priceList = this.priceListRepository.save(priceList);
        return priceList;
    }

    @Override
    public PriceList editPriceList(PriceList priceList) {
        this.findById(priceList.getId());
        PriceList priceList1 = priceListRepository.save(priceList);
        return priceList1;
    }

    @Override
    public Integer deleteById(Long id) {
        PriceList priceList = this.findById(id);
        this.delete(priceList);
        return 1;
    }


}
