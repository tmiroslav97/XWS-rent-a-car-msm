package agent.app.model;


import agent.app.model.enumeration.RequestStatusEnum;
import org.joda.time.DateTime;

import java.util.Set;

public class Request {
    private Long id;
    private RequestStatusEnum status;
    private DateTime submitDate;
    private Set<Ad> ads;
    private EndUser endUser;
    private DateTime startDate;
    private DateTime endDate;
    private String location;
    private Boolean bundle;

}