package agent.app.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Getter
@Setter
public class AdSearchDTO {

    AdOrdinarySearchDTO adOrdinarySearchDTO;
    AdAdvancedSearchDTO adAdvancedSearchDTO;

}
