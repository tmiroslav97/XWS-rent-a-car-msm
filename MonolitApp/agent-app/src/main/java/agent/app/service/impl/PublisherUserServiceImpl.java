package agent.app.service.impl;

import agent.app.model.PublisherUser;
import agent.app.service.intf.PublisherUserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublisherUserServiceImpl implements PublisherUserService {

    @Override
    public PublisherUser findById(Long id) {
        return null;
    }

    @Override
    public List<PublisherUser> findAll() {
        return null;
    }

    @Override
    public PublisherUser save(PublisherUser publisherUser) {
        return null;
    }

    @Override
    public void delete(PublisherUser publisherUser) {

    }

    @Override
    public Integer deleteById(Long id) {
        return null;
    }

    @Override
    public PublisherUser createPublisherUser(PublisherUser publisherUser) {
        return null;
    }

    @Override
    public PublisherUser editPublisherUser(PublisherUser publisherUser) {
        return null;
    }
}
