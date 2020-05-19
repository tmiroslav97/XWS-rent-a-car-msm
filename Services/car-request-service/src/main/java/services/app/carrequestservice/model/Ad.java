package services.app.carrequestservice.model;

import lombok.*;
import services.app.carrequestservice.common.db.DbTableConstants;

import javax.persistence.*;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
@Table(name = DbTableConstants.AD)
public class Ad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
