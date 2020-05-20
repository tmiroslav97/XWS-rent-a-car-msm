package services.app.adservice.service.intf;

import services.app.adservice.dto.car.CarCalendarTermCreateDTO;
import services.app.adservice.model.CarCalendarTerm;

import java.util.List;

public interface CarCalendarTermService {
    CarCalendarTerm findById(Long id);
    List<CarCalendarTerm> findAll();
    CarCalendarTerm save(CarCalendarTerm carCalendarTerm);
    void delete(CarCalendarTerm carCalendarTerm);
    Integer deleteById(Long id);
    CarCalendarTerm createCarCalendarTerm(CarCalendarTermCreateDTO carCalendarTermCreateDTO);
    CarCalendarTerm editCarCalendarTerm(CarCalendarTerm carCalendarTerm);
}
