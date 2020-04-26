package agent.app.dto;

import agent.app.model.enumeration.DistanceLimitEnum;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class AdCreateDTO {

    private String name;
    private String coverPhoto;
    private String location;
    private String distanceLimitFlag;
    private Float distanceLimit;
    private CarCreateDTO carCreateDTO;
    private PriceListCreateDTO priceListCreateDTO;

}
