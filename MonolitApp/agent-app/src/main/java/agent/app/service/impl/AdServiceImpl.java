package agent.app.service.impl;

import agent.app.dto.AdPageDTO;
import agent.app.model.Ad;
import agent.app.repository.AdRepository;
import agent.app.service.intf.AdService;
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
