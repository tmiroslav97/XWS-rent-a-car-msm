package services.app.adsearchservice.service.intf;



import services.app.adsearchservice.dto.AdPageContentDTO;
import services.app.adsearchservice.dto.AdPageDTO;
import services.app.adsearchservice.model.Ad;

import java.util.List;

public interface AdService {
    Ad findById(Long id);
    List<Ad> findAll();
    AdPageContentDTO findAll(Integer page, Integer size);
    Ad save(Ad ad);
    void delete(Ad ad);
    Integer deleteById(Long id);
    Integer editAd(Ad ad);

    //moguce slati sort parametre
    AdPageDTO ordinarySearch();
    AdPageDTO advancedSearch();
}
