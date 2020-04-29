package agent.app.converter;

import agent.app.dto.CarCalendarTermCreateDTO;
import agent.app.model.CarCalendarTerm;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

public class CarCalendarTermConverter {

    public static CarCalendarTerm toCreateCarCalendarTermFromRequest(CarCalendarTermCreateDTO carCalendarTermCreateDTO){
        DateTimeFormatter dtf = DateTimeFormat.forPattern("yyyy-MM-dd HH:mm:ss");
        DateTime sdt = dtf.parseDateTime(carCalendarTermCreateDTO.getStartDate());
        DateTime edt = dtf.parseDateTime(carCalendarTermCreateDTO.getEndDate());
        return CarCalendarTerm.builder()
                .startDate(sdt)
                .endDate(edt)
                .build();
    }
}
