package agent.app.model;

import java.util.Set;

public class PublisherUser extends User {
   private Boolean deleted;
   private Set<Ad> ads;
   private Set<PriceList> priceLists;
   private Set<Comment> comments;
   private Set<Message> inbox;
   private Set<Message> outbox;
   private Set<Report> reports;

}