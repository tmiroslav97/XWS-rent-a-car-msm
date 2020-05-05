package agent.app.repository;

import agent.app.model.FuelType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuleTypeRepository extends JpaRepository<FuelType, Long> {

    Boolean existsByName(String name);
}
