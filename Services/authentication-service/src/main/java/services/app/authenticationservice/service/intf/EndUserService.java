package services.app.authenticationservice.service.intf;


import services.app.authenticationservice.model.EndUser;

import java.util.List;

public interface EndUserService {
    EndUser findById(Long id);

    List<EndUser> findAll();

    Integer editEndUser();

    Integer disableEndUser();

    Integer enableEndUser();

    Integer enableObligation();

    Integer disableObligation();

    Integer resetCanceledCnt();

    Integer deleteById(Long id);

    void delete();

    EndUser save(EndUser endUser);
}
