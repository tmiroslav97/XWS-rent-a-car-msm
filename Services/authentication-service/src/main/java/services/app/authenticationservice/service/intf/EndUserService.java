package services.app.authenticationservice.service.intf;


import services.app.authenticationservice.model.EndUser;

public interface EndUserService {
    EndUser findById(Long id);

    EndUser save(EndUser endUser);
}
