package agent.app.service.impl;

import agent.app.model.Car;
import agent.app.repository.CarRepository;
import agent.app.service.intf.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Override
    public Car finById(Long id) { return carRepository.findById(id).orElseGet(null); }

    @Override
    public List<Car> findAll() { return carRepository.findAll();  }

    @Override
    public Car save(Car car) {
        return carRepository.save(car);
    }

    @Override
    public void delete(Long id) {
        carRepository.delete(finById(id));
    }
}
