package agent.app.model;

import java.util.Set;

public class EndUser extends PublisherUser {

    private Integer adLimitNum = 3;

    private Boolean enabled;

    private Boolean obliged;

    private Set<Request> requests;

    private Integer canceledCnt;


}