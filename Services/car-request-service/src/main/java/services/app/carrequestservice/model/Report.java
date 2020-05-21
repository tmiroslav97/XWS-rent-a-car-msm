package services.app.carrequestservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import services.app.carrequestservice.common.db.DbColumnConstants;
import services.app.carrequestservice.common.db.DbTableConstants;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = DbTableConstants.REPORT)
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.DESCRIPTION)
    private String description;

    @Column(name = DbColumnConstants.DISTANCETRAVELED, nullable = false)
    private Float distanceTraveled;

    @Column(name = DbColumnConstants.PUBLISHERUSER, nullable = false)
    private Long publisherUser;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinTable(name = DbTableConstants.ADREPORT,
            joinColumns = @JoinColumn(name = "report_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "ad_id", referencedColumnName = "id"))
    private Ad ad;
}