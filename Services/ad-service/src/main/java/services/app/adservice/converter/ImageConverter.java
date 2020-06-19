package services.app.adservice.converter;

import services.app.adservice.dto.image.ImagesSynchronizeDTO;
import services.app.adservice.model.Image;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class ImageConverter {

    public static List<ImagesSynchronizeDTO> toImagesSynchronizeDTOFromImages(Set<Image> images){

        List<ImagesSynchronizeDTO> imagesSynchronizeDTOS = new ArrayList<>();
        for(Image im : images){
            ImagesSynchronizeDTO imagesSynchronizeDTO = ImagesSynchronizeDTO.builder()
                    .id(im.getId())
                    .name(im.getName())
                    .adId(im.getAd().getId())
                    .build();
            imagesSynchronizeDTOS.add(imagesSynchronizeDTO);
        }

        return imagesSynchronizeDTOS;

    }
}
