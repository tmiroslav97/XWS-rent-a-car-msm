package agent.app.model;

import agent.app.common.db.DbColumnConstants;
import agent.app.common.db.DbTableConstants;
import agent.app.model.enumeration.DistanceLimitEnum;
import lombok.*;
import org.hibernate.annotations.Type;
import org.joda.time.DateTime;

import javax.persistence.*;
import java.util.Set;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
@Table(name = DbTableConstants.AD)
public class Ad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.NAME, nullable = false)
    private String name;

    @Column(name = DbColumnConstants.LOCATION, nullable = false)
    private String location;

    @Enumerated(EnumType.STRING)
    @Column(name = DbColumnConstants.DISTANCELIMITFLAG, nullable = false)
    private DistanceLimitEnum distanceLimitFlag;

    @Column(name = DbColumnConstants.DISTANCELIMIT, nullable = false)
    private Float distanceLimit;

    @Temporal(TemporalType.DATE)
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime", parameters = {
            @org.hibernate.annotations.Parameter(name = "databaseZone", value = "UTC"),
            @org.hibernate.annotations.Parameter(name = "javaZone", value = "UTC")
    })
    @Column(name = DbColumnConstants.PUBLISHDATE, nullable = false)
    private DateTime publishedDate;

    @Column(name = DbColumnConstants.RATINGNUM, nullable = false)
    private Long ratingNum = 0L;

    @Column(name = DbColumnConstants.RATINGCOUNT, nullable = false)
    private Long ratingCnt = 0L;

    @Column(name = DbColumnConstants.DELETED, nullable = false)
    private Boolean deleted;

    @Column(name = DbColumnConstants.ENABLED, nullable = false)
    private Boolean enabled;

    @Column(name = DbColumnConstants.RENTCNT, nullable = false)
    private Long rentCnt;

    @OneToOne(fetch = FetchType.EAGER)
    private Car car;

    @OneToMany(mappedBy = "ad", fetch = FetchType.LAZY)
    private Set<CarOccupationTerms> carOccupationTerms;

    @OneToMany(mappedBy = "ad", fetch = FetchType.LAZY )
    private Set<Comment> comments;

    @ManyToOne(fetch = FetchType.LAZY)
    private PublisherUser publisherUser;

    @ManyToOne(fetch = FetchType.LAZY)
    private PriceList priceList;

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<DiscountList> discountLists;

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Request> requests;




}