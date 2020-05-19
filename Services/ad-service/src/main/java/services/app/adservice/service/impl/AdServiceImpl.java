package services.app.adservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import services.app.adservice.exception.ExistsException;
import services.app.adservice.exception.NotFoundException;
import services.app.adservice.model.Ad;
import services.app.adservice.repository.AdRepository;
import services.app.adservice.service.intf.AdService;

import java.util.List;

public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

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
}
