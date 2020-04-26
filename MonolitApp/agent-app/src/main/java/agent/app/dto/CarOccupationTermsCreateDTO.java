package agent.app.dto;

import lombok.*;
import org.joda.time.DateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class CarOccupationTermsCreateDTO {

    private DateTime startDate;
    private DateTime endDate;

}
