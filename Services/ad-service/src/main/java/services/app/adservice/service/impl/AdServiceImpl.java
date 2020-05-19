package services.app.adservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import services.app.adservice.model.Ad;
import services.app.adservice.repository.AdRepository;
import services.app.adservice.service.intf.AdService;

import java.util.List;

public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

    @Override
    public Ad findById(Long id) {
        return null;
    }

    @Override
    public List<Ad> findAll() {
        return null;
    }

    @Override
    public Ad save(Ad ad) {
        return null;
    }

    @Override
    public void delete(Ad ad) {

    }

    @Override
    public Integer deleteById(Long id) {
        return null;
    }
}
