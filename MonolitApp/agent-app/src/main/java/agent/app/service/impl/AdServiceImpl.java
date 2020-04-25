package agent.app.service.impl;

import agent.app.converter.AdConverter;
import agent.app.dto.AdCreateDTO;
import agent.app.model.Ad;
import agent.app.model.Car;
import agent.app.repository.AdRepository;
import agent.app.service.intf.AdService;
import agent.app.service.intf.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

    @Autowired
    private CarService carService;

    @Override
    public Ad findById(Long id) {
        return adRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Ad> findAll() {
        return adRepository.findAll();
    }

    @Override
    public Ad save(Ad ad) {
        return adRepository.save(ad);
    }

    @Override
    public void delete(Long id) {
        adRepository.delete(findById(id));
    }

    @Override
    public Ad createAd(AdCreateDTO adCreateDTO) {
        Ad ad = AdConverter.toCreateAdFromRequest(adCreateDTO);
        Car car = carService.createCar(adCreateDTO.getCarCreateDTO());
        ad.setCar(car);



        return null;
    }


}
