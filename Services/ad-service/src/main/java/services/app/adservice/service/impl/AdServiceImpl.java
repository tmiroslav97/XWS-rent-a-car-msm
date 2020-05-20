package services.app.adservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import services.app.adservice.converter.AdConverter;
import services.app.adservice.converter.CarCalendarTermConverter;
import services.app.adservice.dto.car.StatisticCarDTO;
import services.app.adservice.dto.ad.AdCreateDTO;
import services.app.adservice.dto.ad.AdPageContentDTO;
import services.app.adservice.dto.ad.AdPageDTO;
import services.app.adservice.dto.ad.AdRatingDTO;
import services.app.adservice.dto.car.CarCalendarTermCreateDTO;
import services.app.adservice.exception.ExistsException;
import services.app.adservice.exception.NotFoundException;
import services.app.adservice.model.Ad;
import services.app.adservice.model.Car;
import services.app.adservice.model.CarCalendarTerm;
import services.app.adservice.repository.AdRepository;
import services.app.adservice.service.intf.AdService;
import services.app.adservice.service.intf.CarCalendarTermService;
import services.app.adservice.service.intf.CarService;

import java.util.List;
import java.util.stream.Collectors;

public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

    @Autowired
    private CarService carService;
    
    @Autowired
    private CarCalendarTermService carCalendarTermService;

    @Override
    public Ad findById(Long id) {
        return adRepository.findById(id).orElseThrow(()-> new NotFoundException("Oglas ne postoi."));
    }

    @Override
    public List<Ad> findAll() {
        return adRepository.findAll();
    }

    @Override
    public Ad save(Ad ad) {
        if(ad.getId() != null){
            if(adRepository.existsById(ad.getId())){
                throw new ExistsException(String.format("Oglas vec postoji."));
            }
        }

        return adRepository.save(ad);    }

    @Override
    public void delete(Ad ad) {
        adRepository.delete(ad);

    }

    @Override
    public Integer deleteById(Long id) {
        Ad ad = this.findById(id);
        this.delete(ad);
        return 1;
    }

    @Override
    public AdPageContentDTO findAll (Integer page, Integer size) {

//        Pageable pageable;
//        if(sort.equals("-")){
//            pageable = PageRequest.of(page, size);
//        }else{
//            String par[] = sort.split(" ");
//            if(par[1].equals("opadajuce")) {
//                pageable = PageRequest.of(page, size, Sort.by(par[0]).descending());
//            }else{
//                pageable = PageRequest.of(page, size, Sort.by(par[0]).ascending());
//            }
//
//        }

        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());
        Page<Ad> ads =  adRepository.findAllByDeleted(false, pageable);
        System.out.println(ads.getSize());
        List<AdPageDTO> ret = ads.stream().map(AdConverter::toCreateAdPageDTOFromAd).collect(Collectors.toList());
        AdPageContentDTO adPageContentDTO = AdPageContentDTO.builder()
                .totalPageCnt(ads.getTotalPages())
                .ads(ret)
                .build();

        System.out.println(adPageContentDTO);

        return adPageContentDTO;
    }

    @Override
    public Integer createAd(AdCreateDTO adCreateDTO) {
        Ad ad = AdConverter.toCreateAdFromRequest(adCreateDTO);

        Car car = carService.createCar(adCreateDTO.getCarCreateDTO());
        ad.setCar(car);

//        if(adCreateDTO.getPriceListCreateDTO().getId() == 0){
//            //pravljenje novog cenovnika
//            PriceList priceList = priceListService.createPriceList(adCreateDTO.getPriceListCreateDTO());
//            ad.setPriceList(priceList);
//        }else{
//            //dodavanje vec postojeceg cenovnika
//            PriceList priceList = priceListService.findById(adCreateDTO.getPriceListCreateDTO().getId());
//            ad.setPriceList(priceList);
//        }

        if(adCreateDTO.getCarCalendarTermCreateDTOList() != null){
            List<CarCalendarTermCreateDTO> carCalendarTermCreateDTOList = adCreateDTO.getCarCalendarTermCreateDTOList();
            for(CarCalendarTermCreateDTO carCalendarTermCreateDTO : carCalendarTermCreateDTOList){
                CarCalendarTerm carCalendarTerm = CarCalendarTermConverter.toCreateCarCalendarTermFromRequest(carCalendarTermCreateDTO);
                carCalendarTerm = carCalendarTermService.save(carCalendarTerm);
                ad.getCarCalendarTerms().add(carCalendarTerm);
            }
        }

        ad = this.save(ad);

        return 1;
    }

    @Override
    public List<StatisticCarDTO> getCarsWithBestRating(Long publisherId) {
        return null;
    }

    @Override
    public void syncData() {

    }

    @Override
    public void setRating(AdRatingDTO ad) {

    }
}
