package agent.app.model;

import agent.app.common.db.DbColumnConstants;
import agent.app.common.db.DbTableConstants;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = DbTableConstants.PUBLISHERUSER)
public class PublisherUser extends User {

   @Column(name = DbColumnConstants.DELETED, nullable = false)
   private Boolean deleted;

   @OneToMany(mappedBy = "publisherUser", fetch = FetchType.LAZY)
   private Set<Ad> ads = new HashSet<>();

   @OneToMany(mappedBy = "publisherUser", fetch = FetchType.LAZY)
   private Set<PriceList> priceLists;

   @OneToMany(mappedBy = "publisherUser", fetch = FetchType.LAZY)
   private Set<Comment> comments;

   @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
   private Set<Message> inbox;

   @OneToMany(mappedBy = "publisher", fetch = FetchType.LAZY)
   private Set<Report> reports;

}