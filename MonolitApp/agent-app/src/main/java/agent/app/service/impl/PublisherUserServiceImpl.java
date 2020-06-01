package agent.app.service.impl;

import agent.app.exception.ExistsException;
import agent.app.exception.NotFoundException;
import agent.app.model.PublisherUser;
import agent.app.repository.PublisherUserRepository;
import agent.app.service.intf.PublisherUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublisherUserServiceImpl implements PublisherUserService {

    @Autowired
    private PublisherUserRepository publisherUserRepository;

    @Override
    public PublisherUser findById(Long id) {
        return publisherUserRepository.findById(id).orElseThrow(()-> new NotFoundException("Vlasnik oglasa ne postoji."));
    }

    @Override
    public List<PublisherUser> findAll() {
        return publisherUserRepository.findAll();
    }

    @Override
    public PublisherUser save(PublisherUser publisherUser) {
        if(publisherUserRepository.existsById(publisherUser.getId())){
            throw new ExistsException(String.format("Vlasnik oglasa vec postoji."));
        }
        return publisherUserRepository.save(publisherUser);
    }

    @Override
    public void delete(PublisherUser publisherUser) {
        publisherUserRepository.delete(publisherUser);
    }

    @Override
    public Integer deleteById(Long id) {
        PublisherUser publisherUser = findById(id);
        delete(publisherUser);
        return 1;
    }

    @Override
    public PublisherUser createPublisherUser(PublisherUser publisherUser) {
        return null;
    }

    @Override
    public PublisherUser editPublisherUser(PublisherUser publisherUser) {
        findById(publisherUser.getId());
        PublisherUser publisherUser1 = publisherUserRepository.save(publisherUser);
        return publisherUser1;
    }
}
