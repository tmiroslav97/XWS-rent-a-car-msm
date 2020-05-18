package services.app.authenticationservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import services.app.authenticationservice.exception.NotFoundException;
import services.app.authenticationservice.model.EndUser;
import services.app.authenticationservice.repository.EndUserRepository;
import services.app.authenticationservice.service.intf.EndUserService;

@Service
public class EndUserImpl implements EndUserService {

    @Autowired
    private EndUserRepository endUserRepository;

    @Override
    public EndUser findById(Long id) {
        return endUserRepository.findById(id).orElseThrow(() -> new NotFoundException("Krajnji korisnik sa zadatim id- em nije pronadjen"));
    }

    @Override
    public EndUser save(EndUser endUser) {
        return endUserRepository.save(endUser);
    }
}
