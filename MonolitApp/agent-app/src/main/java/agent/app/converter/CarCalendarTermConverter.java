package agent.app.converter;

import agent.app.dto.CarCalendarTermCreateDTO;
import agent.app.model.CarCalendarTerm;

public class CarCalendarTermConverter {

    public static CarCalendarTerm toCreateCarCalendarTermFromRequest(CarCalendarTermCreateDTO carCalendarTermCreateDTO){
        return CarCalendarTerm.builder()
                .startDate(carCalendarTermCreateDTO.getStartDate())
                .endDate(carCalendarTermCreateDTO.getEndDate())
                .build();
    }
}
