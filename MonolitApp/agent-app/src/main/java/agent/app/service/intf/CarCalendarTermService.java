package agent.app.service.intf;

import agent.app.dto.CarCalendarTermCreateDTO;
import agent.app.model.CarCalendarTerm;

import java.util.List;

public interface CarCalendarTermService {
    CarCalendarTerm findById(Long id);
    List<CarCalendarTerm> findAll();
    CarCalendarTerm save(CarCalendarTerm carCalendarTerm);
}
