package agent.app.dto;

import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class AdPageContentDTO {

    private Integer totalPages;
    List<AdPageDTO> ads;

}
