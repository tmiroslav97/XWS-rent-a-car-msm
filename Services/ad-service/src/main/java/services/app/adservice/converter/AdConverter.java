package services.app.adservice.converter;

import services.app.adservice.dto.ad.AdCreateDTO;
import services.app.adservice.dto.ad.AdPageDTO;
import services.app.adservice.model.Ad;
import services.app.adservice.model.enumeration.DistanceLimitEnum;

import java.util.HashSet;

public class AdConverter {

    public static AdPageDTO toCreateAdPageDTOFromAd(Ad ad){
        return AdPageDTO.builder()
                .id(ad.getId())
                .name(ad.getName())
                .location(ad.getLocation())
                .coverPhoto(ad.getCoverPhoto())
                .price(ad.getPriceList())
                .build();
    }
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
                .comments(new HashSet<>())
                .carCalendarTerms(new HashSet<>())
                .rentCnt(0L)
                .ratingCnt(0L)
                .ratingNum(0L)
                .build();
    }
}
