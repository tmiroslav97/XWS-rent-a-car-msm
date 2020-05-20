package services.app.adservice.service.intf;

import services.app.adservice.dto.StatisticCarDTO;
import services.app.adservice.model.Car;
import services.app.adservice.model.Comment;

import java.util.List;

public interface CommentService {

    Comment finById(Long id);
    List<Comment> findAll();
    Car save(Comment comment);
    void delete(Comment comment);
    Integer deleteById(Long id);
    List<StatisticCarDTO> getCarsWithMostComments(Long publisherId);
    Integer setApprove(Boolean status);

}
