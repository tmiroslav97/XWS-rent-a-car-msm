package agent.app.service.impl;


import agent.app.converter.AdConverter;
import agent.app.dto.AdCreateDTO;
import agent.app.dto.AdPageDTO;
import agent.app.model.Ad;
import agent.app.model.Car;
import agent.app.model.PriceList;
import agent.app.repository.AdRepository;
import agent.app.service.intf.AdService;
import agent.app.service.intf.CarService;
import agent.app.service.intf.PriceListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

    @Autowired
    private CarService carService;

    @Autowired
    private PriceListService priceListService;

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

        //pravljenje novog cenovnika
        PriceList priceList = priceListService.createPriceList(adCreateDTO.getPriceListCreateDTO());
        ad.setPriceList(priceList);
        ad = save(ad);

        //dodavanje u vec postojeci cenovnik
        //napraviti polje u PriceList-i
        return ad;
    }

    @Override
    public AdPageDTO findAllPageAd(Integer pageCnt, Integer adCnt, String sortStr) {
        Pageable pageable;
        if(sortStr.equals("-")){
            pageable = PageRequest.of(pageCnt, adCnt);
        }else{
            String par[] = sortStr.split(" ");
            if(par[1].equals("opadajuce")) {
                pageable = PageRequest.of(pageCnt, adCnt, Sort.by(par[0]).descending());
            }else{
                pageable = PageRequest.of(pageCnt, adCnt, Sort.by(par[0]).ascending());
            }

        }

        Page<Ad> ads =  adRepository.findAll(pageable);



        return null;
    }


}
