package services.app.authenticationservice.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.joda.time.DateTime;
import services.app.authenticationservice.common.db.DbColumnConstants;
import services.app.authenticationservice.common.db.DbTableConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = DbTableConstants.PUBLISHERUSER)
public class PublisherUser extends User {

    @Column(name = DbColumnConstants.DELETED, nullable = false)
    private Boolean deleted;

    @Builder(builderMethodName = "publisherUserBuilder")
    public PublisherUser(Long id, String email, String password, String firstName,
                         String lastName, DateTime lastPasswordResetDate,
                         List<Authority> authorities, Boolean deleted) {
        super(id, email, password, firstName, lastName, lastPasswordResetDate, authorities);
        this.deleted = deleted;
    }

}