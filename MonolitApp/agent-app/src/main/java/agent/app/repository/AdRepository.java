package agent.app.repository;

import agent.app.model.Ad;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;

@Repository
public interface AdRepository extends JpaRepository<Ad,Long> {

    Page<Ad> findAll(Pageable pageable);

}
