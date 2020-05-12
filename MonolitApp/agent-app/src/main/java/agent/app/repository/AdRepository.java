package agent.app.repository;

import agent.app.model.Ad;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdRepository extends JpaRepository<Ad,Long> {

    Page<Ad> findAllByDeleted(Boolean deleted, Pageable pageable);

}
