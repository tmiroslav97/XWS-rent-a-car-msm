package agent.app.service.intf;

import agent.app.model.EndUser;

public interface EndUserService {
    EndUser findById(Long id);

    EndUser save(EndUser endUser);
}
