package services.app.carrequestservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import services.app.carrequestservice.model.Request;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {
}
