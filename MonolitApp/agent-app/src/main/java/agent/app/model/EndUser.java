package agent.app.model;

import agent.app.common.db.DbColumnConstants;
import agent.app.common.db.DbTableConstants;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = DbTableConstants.ENDUSER)
public class EndUser extends PublisherUser {

    @Column(name = DbColumnConstants.ADLIMITNUM, nullable = false)
    private Integer adLimitNum = 3;

    @Column(name = DbColumnConstants.ENABLED, nullable = false)
    private Boolean enabled;

    @Column(name = DbColumnConstants.OBLIGED, nullable = false)
    private Boolean obliged;

    @Column(name = DbColumnConstants.CANCELEDCNT, nullable = false)
    private Integer canceledCnt = 0;

    @OneToMany(mappedBy = "endUser", fetch = FetchType.LAZY)
    private Set<Request> requests = new HashSet<>();

}