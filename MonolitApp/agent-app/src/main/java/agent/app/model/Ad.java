package agent.app.model;

import agent.app.model.enumeration.DistanceLimitEnum;
import org.joda.time.DateTime;

import java.util.Set;

public class Ad {
    private Long id;
    private String name;
    private int location;
    private DistanceLimitEnum distanceLimitFlag;
    private Float distanceLimit;
    private DateTime publishedDate;
    private Long ratingNum;
    private Long ratingCnt;
    private Boolean deleted;
    private Boolean enabled;
    private Car car;
    private PublisherUser publisherUser;
    private Set<CaOccupationTerms> carOccupationTerms;
    private Set<EndUser> endUsers;
    private PriceList priceList;
    private Set<DiscountList> discountLists;
    private Set<Request> requests;
    private Set<Comment> comments;
    private Long rentCnt;
}