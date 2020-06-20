package services.app.carrequestservice.endpoint;

import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;
import services.app.carrequestservice.model.GetAllReqeustsByPublisherIdRequest;
import services.app.carrequestservice.model.GetAllRequestsByPublisherIdResponse;
import services.app.carrequestservice.service.intf.RequestService;

public class RequestEndpoint {
    private static final String NAMESPACE_URI = "http://www.app.services/carrequestservice/model";

    private final RequestService requestService;

    public RequestEndpoint(RequestService requestService) {
        this.requestService = requestService;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getCountryRequest")
    @ResponsePayload
    public GetAllRequestsByPublisherIdResponse getCountry(@RequestPayload GetAllReqeustsByPublisherIdRequest request) {
        GetAllRequestsByPublisherIdResponse response = new GetAllRequestsByPublisherIdResponse();
        response.getRequests().addAll(requestService.findAllByPublisherUserId(request.getPublisherUser()));
        return response;
    }
}
