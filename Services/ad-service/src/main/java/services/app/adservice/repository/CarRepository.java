package services.app.adservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import services.app.adservice.model.Car;

public interface CarRepository  extends JpaRepository<Car, Long> {
}
