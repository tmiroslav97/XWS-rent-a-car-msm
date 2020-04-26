package agent.app.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class AdAdvancedSearchDTO {
    private String carManufacturer;
    private String carModel;
    private String fuelType;
    private String gearboxType;
    private String carType;
    private String priceFrom;
    private String priceTo;
    private Float mileage;
    private Boolean cdw;
    private Integer childrenSeatNum;
}
