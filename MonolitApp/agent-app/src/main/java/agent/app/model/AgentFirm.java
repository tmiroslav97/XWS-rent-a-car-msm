package agent.app.model;

import agent.app.common.db.DbColumnConstants;
import agent.app.common.db.DbTableConstants;
import lombok.*;
import org.hibernate.annotations.CollectionId;
import org.joda.time.DateTime;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = DbTableConstants.AGENTFIRM)
public class AgentFirm extends PublisherUser {

    @Column(name = DbColumnConstants.ADDRESS, nullable = false)
    private String address;

    @Column(name = DbColumnConstants.PMB, unique = true, nullable = false)
    private Long pmb;

    @Column(name = DbColumnConstants.FIRMNAME, nullable = false)
    private String firmName;

    @OneToMany(mappedBy = "agentFirm", fetch = FetchType.LAZY)
    private Set<DiscountList> discountLists = new HashSet<>();

    @Builder(builderMethodName = "agentFirmBuilder")
    public AgentFirm(Long id, String email, String password, String firstName,
                     String lastName, DateTime lastPasswordResetDate,
                     List<Authority> authorities, Boolean deleted, Set<Ad> ads,
                     Set<PriceList> priceLists, Set<Comment> comments,
                     Set<Message> inbox, Set<Report> reports, String address,
                     Long pmb, String firmName, Set<DiscountList> discountLists) {
        super(id, email, password, firstName, lastName, lastPasswordResetDate, authorities, deleted, ads, priceLists, comments, inbox, reports);
        this.address = address;
        this.pmb = pmb;
        this.firmName = firmName;
        this.discountLists = discountLists;
    }
}