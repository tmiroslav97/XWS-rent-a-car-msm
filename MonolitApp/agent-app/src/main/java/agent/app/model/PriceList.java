package agent.app.model;

import org.joda.time.DateTime;

import java.util.Set;

public class PriceList {
   private Long id;
   private DateTime creationDate;
   private Float pricePerKm;
   private Float pricePerKmCDW;
   private PublisherUser publisherUser;
   private Set<Ad> ads;
   
 
}