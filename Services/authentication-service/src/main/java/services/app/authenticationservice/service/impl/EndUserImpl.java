package services.app.authenticationservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import services.app.authenticationservice.exception.NotFoundException;
import services.app.authenticationservice.model.EndUser;
import services.app.authenticationservice.repository.EndUserRepository;
import services.app.authenticationservice.service.intf.EndUserService;

import java.util.List;

@Service
public class EndUserImpl implements EndUserService {

    @Autowired
    private EndUserRepository endUserRepository;

    @Override
    public EndUser findById(Long id) {
        return endUserRepository.findById(id).orElseThrow(() -> new NotFoundException("Krajnji korisnik sa zadatim id- em nije pronadjen"));
    }

    @Override
    public List<EndUser> findAll() {
        return endUserRepository.findAll();
    }

    @Override
    public Integer disableEndUser() {
        return null;
    }

    @Override
    public Integer enableEndUser() {
        return null;
    }

    @Override
    public Integer enableObligation() {
        return null;
    }

    @Override
    public Integer disableObligation() {
        return null;
    }

    @Override
    public Integer resetCanceledCnt() {
        return null;
    }

    @Override
    public Integer deleteById(Long id) {
        return null;
    }

    @Override
    public void delete() {

    }

    @Override
    public EndUser save(EndUser endUser) {
        return endUserRepository.save(endUser);
    }
}
