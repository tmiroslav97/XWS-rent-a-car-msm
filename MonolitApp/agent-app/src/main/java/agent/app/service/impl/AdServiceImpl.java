package agent.app.service.impl;


import agent.app.converter.AdConverter;
import agent.app.converter.CarCalendarTermConverter;
import agent.app.dto.ad.AdCreateDTO;
import agent.app.dto.ad.AdPageContentDTO;
import agent.app.dto.ad.AdPageDTO;
import agent.app.dto.car.CarCalendarTermCreateDTO;
import agent.app.exception.ExistsException;
import agent.app.exception.NotFoundException;
import agent.app.model.Ad;
import agent.app.model.Car;
import agent.app.model.CarCalendarTerm;
import agent.app.model.PriceList;
import agent.app.repository.AdRepository;
import agent.app.service.intf.AdService;
import agent.app.service.intf.CarCalendarTermService;
import agent.app.service.intf.CarService;
import agent.app.service.intf.PriceListService;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

    @Autowired
    private CarService carService;

    @Autowired
    private PriceListService priceListService;

    @Autowired
    private CarCalendarTermService carCalendarTermService;


    @Override
    public Ad findById(Long id) {
        return adRepository.findById(id).orElseThrow(() -> new NotFoundException("Oglas ne postoji."));
    }

    @Override
    public List<Ad> findAll() {
        return adRepository.findAll();
    }

    @Override
    public Ad save(Ad ad) {
        if (ad.getId() != null) {
            if (adRepository.existsById(ad.getId())) {
                throw new ExistsException(String.format("Oglas vec postoji."));
            }
        }

        return adRepository.save(ad);
    }

    @Override
    public void delete(Ad ad) {
        adRepository.delete(ad);
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

    @Override
    public Integer deleteById(Long id) {
        Ad ad = this.findById(id);
        this.delete(ad);
        return 1;
    }

    @Override
    public Integer createAd(AdCreateDTO adCreateDTO) {
        //TODO 2: POZVATI PUBLISH USER SERVIS I DOBITI PUBLISHERA NA OSNOVU EMAIL-A TJ USERNAME-A
        //TODO 3: POZVATI METODU IZ END USER SERVISA ZA DOBAVLJANJE AD LIMIT NUM-A,
        // AKO JE 4 ZNACI DA NIJE U PITANJU END USER VEC AGENT I NE TREBA NISTA OGRANICAVATI
        // A AKO JE BROJ 0, U PITANJU JE END USER I ZABRANITI MU DA POSTAVI OGLAS
        // ILI TO NA POCETKU PROVERITI KROZ NEKU METODU.. DA LI JE END USER I KOLIKI MU JE
        // LIMIT NUM PA U ZAVISNOSTI OD TOGA DOZVOLITI ILI NE DODAVANJE OGLASA
//        PublisherUser publisherUser =
        Ad ad = AdConverter.toCreateAdFromRequest(adCreateDTO);

        Car car = carService.createCar(adCreateDTO.getCarCreateDTO());
        ad.setCar(car);

        if (adCreateDTO.getPriceListCreateDTO().getId() == null) {
            //pravljenje novog cenovnika
            PriceList priceList = priceListService.createPriceList(adCreateDTO.getPriceListCreateDTO());
            //TODO 1: DODATI PUBLISHERA I DODATI OGLAS TAJ PRICE LISTI
            ad.setPriceList(priceList);
        } else {
            //dodavanje vec postojeceg cenovnika
            PriceList priceList = priceListService.findById(adCreateDTO.getPriceListCreateDTO().getId());
            //TODO 2: DODATI OGLAS TAJ PRICE LISTI
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

        ad = this.save(ad);
//        PriceList priceList = ad.getPriceList();
//        priceList.getAds().add(ad);

        return 1;
    }

    @Override
    public void syncData() {

    }

    @Override
    public AdPageContentDTO findAllOrdinarySearch(Integer page, Integer size, String location, DateTime startDate, DateTime endDate) {
        System.out.println("METODAAAAAAAAAAAAAAAAAAAAA ZAAA PRETRAGU");
        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());
        Page<Ad> ads = adRepository.findAllOrdinarySearch(false, location, startDate, endDate, pageable);
        System.out.println("Broj oglasa koji upadaju u datum : " + ads.getSize());
        List<AdPageDTO> ret = ads.stream().map(AdConverter::toCreateAdPageDTOFromAd).collect(Collectors.toList());
        AdPageContentDTO adPageContentDTO = AdPageContentDTO.builder()
                .totalPageCnt(ads.getTotalPages())
                .ads(ret)
                .build();

//        System.out.println(adPageContentDTO);

        return adPageContentDTO;
    }

    @Override
    public AdPageContentDTO findAll(Integer page, Integer size) {

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
        Page<Ad> ads = adRepository.findAllByDeleted(false, pageable);
        System.out.println(ads.getSize());
        List<AdPageDTO> ret = ads.stream().map(AdConverter::toCreateAdPageDTOFromAd).collect(Collectors.toList());
        AdPageContentDTO adPageContentDTO = AdPageContentDTO.builder()
                .totalPageCnt(ads.getTotalPages())
                .ads(ret)
                .build();

        return adPageContentDTO;
    }


}
