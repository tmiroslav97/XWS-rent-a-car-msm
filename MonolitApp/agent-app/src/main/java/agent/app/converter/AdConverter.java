package agent.app.converter;

import agent.app.dto.AdCreateDTO;
import agent.app.dto.AdPageDTO;
import agent.app.model.Ad;
import agent.app.model.Car;
import agent.app.model.enumeration.DistanceLimitEnum;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;

import java.util.HashSet;

public class AdConverter {

    public static Ad toCreateAdFromRequest(AdCreateDTO adCreateDTO){
        return Ad.builder()
                .name(adCreateDTO.getName())
                .location(adCreateDTO.getLocation())
                .coverPhoto(adCreateDTO.getCoverPhoto())
                .distanceLimitFlag(DistanceLimitEnum.LIMITED)
                .distanceLimit(adCreateDTO.getDistanceLimit())
                .publishedDate(DateAPI.DateTimeNow())
                .deleted(false)
                .enabled(true)
                .discountLists(new HashSet<>())
                .requests(new HashSet<>())
                .comments(new HashSet<>())
                .carCalendarTerms(new HashSet<>())
                .rentCnt(0L)
                .ratingCnt(0L)
                .ratingNum(0L)
                .build();
    }

    public static AdPageDTO toCreateAdPageDTOFromAd(Ad ad){
        return AdPageDTO.builder()
                .id(ad.getId())
                .name(ad.getName())
                .location(ad.getLocation())
                .coverPhoto(ad.getCoverPhoto())
                .price(ad.getPriceList().getPricePerDay())
//                .carManufacturer(car.getCarManufacturer())
//                .carModel(car.getCarModel())
//                .childrenSeatNum(car.getChildrenSeatNum())
//                .fuelType(car.getFuelType())
//                .mileage(car.getMileage())
                .build();
    }
}
