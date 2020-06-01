package agent.app.service.intf;

import agent.app.dto.enduser.EndUserPageDTO;
import agent.app.model.EndUser;

import java.util.List;

public interface EndUserService {
    EndUser findById(Long id);

    List<EndUser> findAll();

    EndUserPageDTO findAll(Integer page, Integer size);

    Integer blockOrUnblockById(Long id, Boolean state);

    Integer obligateOrUnobligateById(Long id, Boolean state);

    Integer logicDeleteOrRevertById(Long id, Boolean state);

    Integer deleteById(Long id);

    void delete(EndUser endUser);

    EndUser save(EndUser endUser);
}
