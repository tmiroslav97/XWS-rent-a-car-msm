package agent.app.service.intf;

import agent.app.model.Ad;
import java.util.List;

public interface AdService {
    Ad findById(Long id);
    List<Ad> findAll();
    Ad save(Ad ad);
    void delete(Long id);
}
