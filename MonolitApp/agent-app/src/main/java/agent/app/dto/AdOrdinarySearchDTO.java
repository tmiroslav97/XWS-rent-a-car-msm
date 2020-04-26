package agent.app.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class AdOrdinarySearchDTO {
    private String startDate;
    private String endDate;
    private String loation;
}
