package agent.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.joda.time.DateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class PriceListCreateDTO {
    private DateTime creationDate;
    private Float pricePerKm;
    private Float pricePerKmCDW;
    private Long id;
}
