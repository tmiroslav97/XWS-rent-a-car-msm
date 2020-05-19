package services.app.adservice.service.intf;


import services.app.adservice.model.Ad;

import java.util.List;

public interface AdService {

    Ad findById(Long id);
    List<Ad> findAll();
    Ad save(Ad ad);
    void delete(Ad ad);
    Integer deleteById(Long id);

}
