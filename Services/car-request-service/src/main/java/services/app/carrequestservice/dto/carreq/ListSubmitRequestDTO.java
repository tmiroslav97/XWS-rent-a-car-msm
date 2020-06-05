package services.app.carrequestservice.dto.carreq;

import lombok.*;

import java.util.List;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ListSubmitRequestDTO {
    List<SubmitRequestDTO> submitRequestDTOS;
}
