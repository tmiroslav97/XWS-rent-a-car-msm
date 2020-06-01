package agent.app.service.intf;

import agent.app.dto.car.CarCalendarTermCreateDTO;
import agent.app.model.CarCalendarTerm;
import agent.app.model.PublisherUser;
import agent.app.model.User;

import java.util.List;


public interface PublisherUserService {
    PublisherUser findById(Long id);
    List<PublisherUser> findAll();
    PublisherUser save(PublisherUser publisherUser);
    void delete(PublisherUser publisherUser);
    Integer deleteById(Long id);
    PublisherUser createPublisherUser(String publishUserUsernamer);
    PublisherUser editPublisherUser(PublisherUser publisherUser);
    Boolean existsByEmail(String email);
    PublisherUser findByEmail(String email);
}
