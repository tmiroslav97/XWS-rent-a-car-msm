package services.app.carrequestservice.service.intf;

import services.app.carrequestservice.dto.carreq.SubmitRequestDTO;
import services.app.carrequestservice.model.Request;

import java.util.HashMap;
import java.util.List;

public interface RequestService {

    Request findById(Long id);

    List<Request> findAll();

    Integer deleteById(Long id);

    Integer submitRequest(HashMap<Long, List<SubmitRequestDTO>> submitRequestDTOS, Long userId);

    void delete(Request request);

    Request save(Request request);
}
