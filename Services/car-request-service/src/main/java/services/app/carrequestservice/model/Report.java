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

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    private Ad ad;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long publisherUser;
}