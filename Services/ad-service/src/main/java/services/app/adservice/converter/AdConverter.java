package services.app.adservice.converter;

import services.app.adservice.dto.ad.AdPageDTO;
import services.app.adservice.model.Ad;

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
}
