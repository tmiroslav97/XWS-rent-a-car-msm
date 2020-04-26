package agent.app.service.impl;

import agent.app.model.CarCalendarTerm;
import agent.app.repository.CarCalendarTermRepository;
import agent.app.service.intf.CarCalendarTermService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarCalendarTermServiceImpl implements CarCalendarTermService {

    @Autowired
    public CarCalendarTermRepository carCalendarTermRepository;


    @Override
    public CarCalendarTerm findById(Long id) {
        return carCalendarTermRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<CarCalendarTerm> findAll() {
        return carCalendarTermRepository.findAll();
    }

    @Override
    public CarCalendarTerm save(CarCalendarTerm carCalendarTerm) {
        return carCalendarTermRepository.save(carCalendarTerm);
    }
}
