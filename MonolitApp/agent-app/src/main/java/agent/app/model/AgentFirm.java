package agent.app.model;

import agent.app.common.db.DbColumnConstants;
import agent.app.common.db.DbTableConstants;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CollectionId;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
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
    private Set<DiscountList> discountLists;
}