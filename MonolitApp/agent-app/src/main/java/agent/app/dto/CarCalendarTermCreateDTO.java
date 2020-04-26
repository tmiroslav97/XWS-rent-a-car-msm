package agent.app.dto;

import lombok.*;
import org.joda.time.DateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class CarCalendarTermCreateDTO {

    private DateTime startDate;
    private DateTime endDate;

}
