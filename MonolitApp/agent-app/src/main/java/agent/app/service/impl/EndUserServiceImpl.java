package agent.app.service.impl;

import agent.app.converter.EndUserConverter;
import agent.app.dto.enduser.EndUserDTO;
import agent.app.dto.enduser.EndUserPageDTO;
import agent.app.exception.NotFoundException;
import agent.app.model.EndUser;
import agent.app.repository.EndUserRepository;
import agent.app.service.intf.EndUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EndUserServiceImpl implements EndUserService {

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
    public EndUserPageDTO findAll(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("email").ascending());
        Page<EndUser> endUserPage = endUserRepository.findAll(pageable);
        List<EndUserDTO> endUserDTOList = EndUserConverter.fromEntityList(new ArrayList<>(endUserPage.getContent()), EndUserConverter::fromEndUserToEndUserDTO);
        EndUserPageDTO endUserPageDTO = EndUserPageDTO.builder()
                .endUsers(endUserDTOList)
                .totalPageCnt(endUserPage.getTotalPages())
                .build();
        return endUserPageDTO;
    }

    @Override
    public String blockOrUnblockById(Long id, Boolean state) {
        EndUser endUser = this.findById(id);
        endUser.setEnabled(state);
        this.save(endUser);
        if (state) {
            return "Korisnik uspjesno blokiran";
        } else {
            return "Korisniku uspjesno ukinuto blokiranje";
        }
    }

    @Override
    public String obligateOrUnobligateById(Long id, Boolean state) {
        EndUser endUser = this.findById(id);
        endUser.setObliged(state);
        this.save(endUser);
        if (state) {
            return "Korisniku uspjesno uvedena zabrana";
        } else {
            return "Korisniku uspjesno skinuta zabrana";
        }
    }

    @Override
    public String logicDeleteOrRevertById(Long id, Boolean state) {
        EndUser endUser = this.findById(id);
        endUser.setDeleted(state);
        this.save(endUser);
        if (state) {
            return "Korisnik uspjesno logicki obrisan";
        } else {
            return "Korisnik uspjesno vracen";
        }
    }

    @Override
    public Integer deleteById(Long id) {
        EndUser endUser = this.findById(id);
        this.delete(endUser);
        return 1;
    }

    @Override
    public void delete(EndUser endUser) {
        endUserRepository.delete(endUser);
    }

    @Override
    public EndUser save(EndUser endUser) {
        return endUserRepository.save(endUser);
    }
}