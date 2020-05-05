package agent.app.model;

import agent.app.common.db.DbColumnConstants;
import agent.app.common.db.DbTableConstants;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = DbTableConstants.CARMANUFACTURERCODEBOOK)
public class CarManufacturerCodebook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.NAME, unique = true, nullable = false)
    private String name;

    @OneToMany(mappedBy = "carManufacturerCodebook", fetch = FetchType.LAZY)
    private Set<CarModelCodebook> carModelCodebooks = new HashSet<>();
}
