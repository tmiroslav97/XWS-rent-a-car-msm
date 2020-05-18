package services.app.adsearchservice.service.intf;



import services.app.adsearchservice.model.Car;

import java.util.List;

public interface CarService {
    Car findById(Long id);
    List<Car> findAll();
    Car save(Car car);
    void delete(Car car);
    Car editCar(Car car);
    Integer deleteById(Long id);
}
