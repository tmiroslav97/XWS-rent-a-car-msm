package services.app.adsearchservice.service.impl;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import services.app.adsearchservice.dto.AdPageContentDTO;
import services.app.adsearchservice.dto.AdPageDTO;
import services.app.adsearchservice.exception.ExistsException;
import services.app.adsearchservice.exception.NotFoundException;
import services.app.adsearchservice.model.Ad;
import services.app.adsearchservice.repository.AdRepository;
import services.app.adsearchservice.service.intf.AdService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

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
    public void syncData() {

    }

    @Override
    public AdPageContentDTO findAllOrdinarySearch(Integer page, Integer size, String location, DateTime startDate, DateTime endDate) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());
        Page<Ad> ads = adRepository.findByDeletedAndLocationAndCarCalendarTermsStartDateBeforeAndCarCalendarTermsEndDateAfter(false, location, startDate, endDate, pageable);
//        List<AdPageDTO> ret = ads.stream().map(AdConverter::toCreateAdPageDTOFromAd).collect(Collectors.toList());
        List<AdPageDTO> ret = new ArrayList<>();
                System.out.println(ret.size());
        AdPageContentDTO adPageContentDTO = AdPageContentDTO.builder()
                .totalPageCnt(ads.getTotalPages())
                .ads(ret)
                .build();

        return adPageContentDTO;
    }

    @Override
    public AdPageDTO advancedSearch() {
        return null;
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


//        List<AdPageDTO> ret = ads.stream().map(AdConverter::toCreateAdPageDTOFromAd).collect(Collectors.toList());

        List<AdPageDTO> ret = new ArrayList<>();
        System.out.println(ret.size());
        AdPageContentDTO adPageContentDTO = AdPageContentDTO.builder()
                .totalPageCnt(ads.getTotalPages())
                .ads(ret)
                .build();


        return adPageContentDTO;
    }


}
