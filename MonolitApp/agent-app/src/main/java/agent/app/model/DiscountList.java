package agent.app.model;

import org.joda.time.DateTime;

import java.util.Set;

public class DiscountList {
    private Long id;
    private DateTime creationDay;
    private Integer dayCnt;
    private Float discount;
    private AgentFirm agentFirm;
    private Set<Ad> ads;
}