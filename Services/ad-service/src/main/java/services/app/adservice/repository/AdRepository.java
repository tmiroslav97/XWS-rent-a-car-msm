package services.app.adservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import services.app.adservice.model.Ad;

public interface AdRepository  extends JpaRepository<Ad, Long> {
}
