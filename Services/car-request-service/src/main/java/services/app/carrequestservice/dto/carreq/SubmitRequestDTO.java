package services.app.carrequestservice.dto.carreq;

import lombok.*;

import java.util.List;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SubmitRequestDTO {
    Boolean bundle;
    String startDate;
    String endDate;
    String adName;
    List<Long> adIds;
}
