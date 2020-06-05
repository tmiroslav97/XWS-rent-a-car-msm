package services.app.carrequestservice.service.intf;

import services.app.carrequestservice.model.Request;

import java.util.List;

public interface RequestService {

    Request findById(Long id);

    List<Request> findAll();

    Integer deleteById(Long id);

    void delete(Request request);

    Request save(Request request);
}
