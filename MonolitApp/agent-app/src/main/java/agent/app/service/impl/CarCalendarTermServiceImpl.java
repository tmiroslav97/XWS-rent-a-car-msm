package agent.app.service.impl;

import agent.app.repository.CarCalendarTermRepository;
import agent.app.service.intf.CarCalendarTermService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarCalendarTermServiceImpl implements CarCalendarTermService {

    @Autowired
    public CarCalendarTermRepository carCalendarTermRepository;


}
