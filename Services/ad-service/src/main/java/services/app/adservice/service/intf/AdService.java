package services.app.adservice.service.intf;

import services.app.adservice.dto.ad.AdCreateDTO;
import services.app.adservice.dto.ad.AdPageContentDTO;

import services.app.adservice.dto.StatisticCarDTO;
import services.app.adservice.model.Ad;

import java.util.List;

public interface AdService {

    Ad findById(Long id);
    List<Ad> findAll();
    Ad save(Ad ad);
    void delete(Ad ad);
    Integer deleteById(Long id);
    AdPageContentDTO findAll(Integer page, Integer size);
    Integer createAd(AdCreateDTO adCreateDTO);
    List<StatisticCarDTO> getCarsWithBestRating(Long publisherId);


}
