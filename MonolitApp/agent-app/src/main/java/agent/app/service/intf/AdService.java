package agent.app.service.intf;


import agent.app.dto.AdCreateDTO;
import agent.app.dto.AdPageContentDTO;
import agent.app.dto.AdPageDTO;
import agent.app.dto.AdSearchDTO;
import agent.app.model.Ad;
import java.util.List;

public interface AdService {
    Ad findById(Long id);
    List<Ad> findAll();
    Ad save(Ad ad);
    void delete(Long id);
    Integer createAd(AdCreateDTO adCreateDTO);
    AdPageContentDTO findAllPageAd(Integer page);
//    AdPageContentDTO findAllPageAd(Integer page, Integer size, String sort);
//    AdSearchDTO findAllSearchAdd(Integer page, Integer size, String sort)


}
