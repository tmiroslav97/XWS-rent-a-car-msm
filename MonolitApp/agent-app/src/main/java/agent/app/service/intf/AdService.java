package agent.app.service.intf;


import agent.app.dto.AdCreateDTO;
import agent.app.dto.AdPageDTO;
import agent.app.model.Ad;
import java.util.List;

public interface AdService {
    Ad findById(Long id);
    List<Ad> findAll();
    Ad save(Ad ad);
    void delete(Long id);
    Ad createAd(AdCreateDTO adCreateDTO);
    AdPageDTO findAllPageAd(Integer pageCnt, Integer adCnt, String sortStr);

}
