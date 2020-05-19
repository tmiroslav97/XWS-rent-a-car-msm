package agent.app.converter;

import agent.app.dto.car.CarCalendarTermCreateDTO;
import agent.app.model.CarCalendarTerm;

public class CarCalendarTermConverter {

    public static CarCalendarTerm toCreateCarCalendarTermFromRequest(CarCalendarTermCreateDTO carCalendarTermCreateDTO){
//        DateTime sdt = DateAPI.DateTimeFromString(carCalendarTermCreateDTO.getStartDate());
//        DateTime edt = DateAPI.DateTimeFromString(carCalendarTermCreateDTO.getEndDate());
        return CarCalendarTerm.builder()
                .startDate(DateAPI.DateTimeNow())
                .endDate(DateAPI.DateTimeNow())
                .build();
    }
}
