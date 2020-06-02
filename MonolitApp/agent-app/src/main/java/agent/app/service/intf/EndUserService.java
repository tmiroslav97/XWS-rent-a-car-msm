package agent.app.service.intf;

import agent.app.model.EndUser;
import agent.app.model.User;

public interface EndUserService {
    EndUser findById(Long id);
    Boolean existsByEmail(String email);
    EndUser findByEmail(String email);
    EndUser save(EndUser endUser);
    Integer getAdLimitNum(String email);
}
