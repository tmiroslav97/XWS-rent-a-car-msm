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
@Table(name = DbTableConstants.CARMANUFACTURER)
public class CarManufacturer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = DbColumnConstants.NAME, unique = true, nullable = false)
    private String name;

    @OneToMany(mappedBy = "carManufacturer", fetch = FetchType.LAZY)
    private Set<CarModel> carModels = new HashSet<>();
}
