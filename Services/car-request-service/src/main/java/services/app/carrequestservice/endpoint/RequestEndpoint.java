package services.app.carrequestservice.endpoint;

import services.app.carrequestservice.service.intf.RequestService;

public class RequestEndpoint {
    private static final String NAMESPACE_URI = "http://www.app.services/carrequestservice/gen";

    private final RequestService requestService;

    public RequestEndpoint(RequestService requestService) {
        this.requestService = requestService;
    }

}
