package services.app.carrequestservice.service.intf;

import services.app.carrequestservice.dto.RequestDTO;
import services.app.carrequestservice.model.Request;

import java.util.List;

public interface RequestService {

    Request findById(Long id);
    List<Request> findAll();
    Request save(Request request);
    void delete(Request request);
    Integer deleteById(Long id);
    Integer createRequest(RequestDTO request);
    Integer confirmRequest(Long id, Boolean status);
    Integer refuseRequest(Long id);
    Integer scheduleRefuseRequest(Long id);

}
