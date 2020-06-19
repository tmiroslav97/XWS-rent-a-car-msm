package services.app.adservice.dto.ad;

import lombok.*;
import org.joda.time.DateTime;
import services.app.adservice.dto.car.CarCalendarTermCreateDTO;
import services.app.adservice.dto.car.CarCalendarTermSynchronizeDTO;
import services.app.adservice.dto.car.CarCreateDTO;
import services.app.adservice.dto.car.CarSynchronizeDTO;
import services.app.adservice.dto.image.ImagesSynchronizeDTO;
import services.app.adservice.dto.pricelist.PriceListCreateDTO;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class AdSynchronizeDTO {
    private Long id;
    private String name;
    private String location;
    private String coverPhoto;
    private String distanceLimitFlag;
    private Float distanceLimit;
    private DateTime publishedDate;
    private List<ImagesSynchronizeDTO> imagesSynchronizeDTOS;
    private Long ratingNum;
    private Long ratingCnt;
    private Boolean deleted;
    private Boolean enabled;
    private Long rentCnt;
    private Float pricePerDay;
    private Float pricePerKm;
    private Float pricePerKmCDW;
    private Long publisherUser;
    private CarSynchronizeDTO carSynchronizeDTO;
    private List<CarCalendarTermSynchronizeDTO> carCalendarTermSynchronizeDTOS;

}
