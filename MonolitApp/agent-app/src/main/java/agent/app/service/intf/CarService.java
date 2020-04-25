package agent.app.service.intf;

import agent.app.dto.CarCreateDTO;
import agent.app.model.Car;
import java.util.List;

public interface CarService {
    Car finById(Long id);
    List<Car> findAll();
    Car save(Car car);
    void delete(Long id);
    Car createCar(CarCreateDTO carCreateDTO);
}
