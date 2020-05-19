package services.app.carrequestservice.service.intf;

import services.app.carrequestservice.model.Request;

import java.util.List;

public interface RequestService {

    Request findById(Long id);
    List<Request> findAll();
    Request save(Request request);
    void delete(Request request);
    Integer deleteById(Long id);

}
