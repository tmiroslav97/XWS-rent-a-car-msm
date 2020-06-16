package services.app.carrequestservice.model;

import lombok.*;
import org.hibernate.annotations.Type;
import org.joda.time.DateTime;
import services.app.carrequestservice.common.db.DbColumnConstants;
import services.app.carrequestservice.common.db.DbTableConstants;
import services.app.carrequestservice.model.enumeration.RequestStatusEnum;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
@Table(name = DbTableConstants.REQUEST)
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = DbColumnConstants.STATUS, nullable = false)
    private RequestStatusEnum status;

    @Temporal(TemporalType.DATE)
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime", parameters = {
            @org.hibernate.annotations.Parameter(name = "databaseZone", value = "UTC"),
            @org.hibernate.annotations.Parameter(name = "javaZone", value = "UTC")
    })
    @Column(name = DbColumnConstants.SUBMITDATE, nullable = false)
    private DateTime submitDate;

    @Column(name = DbColumnConstants.ENDUSER, nullable = false)
    private Long endUser;

    @Column(name = DbColumnConstants.PUBLISHERUSER, nullable = false)
    private Long publisherUser;

    @Column(name = DbColumnConstants.ADNAME, nullable = false)
    private String adName;

    @Temporal(TemporalType.DATE)
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime", parameters = {
            @org.hibernate.annotations.Parameter(name = "databaseZone", value = "UTC"),
            @org.hibernate.annotations.Parameter(name = "javaZone", value = "UTC")
    })
    @Column(name = DbColumnConstants.STARTDATE, nullable = false)
    private DateTime startDate;

    @Temporal(TemporalType.DATE)
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime", parameters = {
            @org.hibernate.annotations.Parameter(name = "databaseZone", value = "UTC"),
            @org.hibernate.annotations.Parameter(name = "javaZone", value = "UTC")
    })
    @Column(name = DbColumnConstants.ENDDATE, nullable = false)
    private DateTime endDate;

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Ad> ads = new HashSet<>();

}