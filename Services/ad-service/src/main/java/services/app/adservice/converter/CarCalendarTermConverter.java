package services.app.adservice.converter;


import services.app.adservice.dto.car.CarCalendarTermCreateDTO;
import services.app.adservice.model.CarCalendarTerm;

public class CarCalendarTermConverter {

    public static CarCalendarTerm toCreateCarCalendarTermFromRequest(CarCalendarTermCreateDTO carCalendarTermCreateDTO){

        return CarCalendarTerm.builder()
                .startDate(DateAPI.DateTimeNow())
                .endDate(DateAPI.DateTimeNow())
                .build();
    }
}
