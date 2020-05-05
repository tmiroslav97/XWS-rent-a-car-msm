package agent.app.repository;

import agent.app.model.CarModelCodebook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarModelCodebookRepository extends JpaRepository<CarModelCodebook, Long> {

    Boolean existsByName(String name);
}
