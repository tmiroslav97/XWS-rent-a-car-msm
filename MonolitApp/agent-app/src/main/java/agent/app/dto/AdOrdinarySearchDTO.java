package agent.app.dto;

import lombok.*;
import org.joda.time.DateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class AdOrdinarySearchDTO {
    private DateTime startDate;
    private DateTime endDate;
    private String loation;
}
