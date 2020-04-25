package agent.app.model;

import agent.app.common.db.DbColumnConstants;
import agent.app.common.db.DbTableConstants;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.joda.time.DateTime;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = DbTableConstants.PRICELIST)
public class PriceList {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Temporal(TemporalType.DATE)
   @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime", parameters = {
           @org.hibernate.annotations.Parameter(name = "databaseZone", value = "UTC"),
           @org.hibernate.annotations.Parameter(name = "javaZone", value = "UTC")
   })
   @Column(name = DbColumnConstants.CREATIONDATE, nullable = false)
   private DateTime creationDate;

   @Column(name = DbColumnConstants.PRICEPERKM, nullable = false)
   private Float pricePerKm;

   @Column(name = DbColumnConstants.PRICEPERCWD)
   private Float pricePerKmCDW;

   @ManyToOne(fetch = FetchType.LAZY)
   private PublisherUser publisherUser;

   @OneToMany(mappedBy = "priceList", fetch = FetchType.LAZY)
   private Set<Ad> ads;
   
 
}