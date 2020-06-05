package services.app.adservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import services.app.adservice.client.AuthenticationClient;
import services.app.adservice.client.PricelistAndDiscountClient;
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

@Service
public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

    @Autowired
    private CarService carService;
    
    @Autowired
    private CarCalendarTermService carCalendarTermService;

    private PricelistAndDiscountClient pricelistAndDiscountClient;
    private AuthenticationClient authenticationClient;

    @Override
    public Ad findById(Long id) {
        return adRepository.findById(id).orElseThrow(()-> new NotFoundException("Oglas ne postoi."));
    }

    @Override
    public List<Ad> findAll() {
        return adRepository.findAll();
    }

//    @Override
//    public AdPageContentDTO findAll(Integer page, Integer size, String email) {
////        User pu = userService.findByEmail(email);
//
//        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());
//        Page<Ad> ads = adRepository.findAllByDeletedAndPublisherUserEmail(false, email, pageable);
//
//        List<AdPageDTO> ret = ads.stream().map(AdConverter::toCreateAdPageDTOFromAd).collect(Collectors.toList());
//        System.out.println(ret.size());
//        AdPageContentDTO adPageContentDTO = AdPageContentDTO.builder()
//                .totalPageCnt(ads.getTotalPages())
//                .ads(ret)
//                .build();
//
//
//        return adPageContentDTO;
//    }

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
    public Integer createAd(AdCreateDTO adCreateDTO , String email) {

        Integer rez = authenticationClient.getAdLimitNum(email);

        if(rez == 4){
            System.out.println("nije end userrrr");
        }else if(rez == 0){
            System.out.println("end user");
            System.out.println("ne sme dodavati vise oglasa");
            return 2;
        }
        Ad ad = AdConverter.toCreateAdFromRequest(adCreateDTO);

        Car car = carService.createCar(adCreateDTO.getCarCreateDTO());
        ad.setCar(car);

        if (adCreateDTO.getPriceListCreateDTO().getId() == null) {
            //pravljenje novog cenovnika
            Long priceList = pricelistAndDiscountClient.createPricelist(adCreateDTO.getPriceListCreateDTO());
            //TODO 1: DODATI PUBLISHERA I DODATI OGLAS TAJ PRICE LISTI
            ad.setPriceList(priceList);
        } else {
            //dodavanje vec postojeceg cenovnika
            Long priceList = pricelistAndDiscountClient.findPriceList(adCreateDTO.getPriceListCreateDTO().getId());
            ad.setPriceList(priceList);
        }

        if (adCreateDTO.getCarCalendarTermCreateDTOList() != null) {
            List<CarCalendarTermCreateDTO> carCalendarTermCreateDTOList = adCreateDTO.getCarCalendarTermCreateDTOList();
            for (CarCalendarTermCreateDTO carCalendarTermCreateDTO : carCalendarTermCreateDTOList) {
                CarCalendarTerm carCalendarTerm = CarCalendarTermConverter.toCreateCarCalendarTermFromRequest(carCalendarTermCreateDTO);
                carCalendarTerm = carCalendarTermService.save(carCalendarTerm);
                ad.getCarCalendarTerms().add(carCalendarTerm);
            }
        }
        Long publisherUser = authenticationClient.findPublishUserByEmail(email);
        ad.setPublisherUser(publisherUser);
        ad = this.save(ad);

        if(rez != 4){
            Integer r = authenticationClient.reduceLimitNum(email);
            System.out.println("Limit num: "+ r);
        }
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

    @Override
    public void logicalDeleteOrRevertAds(List<Ad> ads, Boolean status) {
        for (Ad ad : ads) {
            this.logicalDeleteOrRevert(ad, status);
        }
    }

    @Override
    public void logicalDeleteOrRevert(Ad ad, Boolean status) {
        ad.setDeleted(status);
        this.save(ad);
    }
}
