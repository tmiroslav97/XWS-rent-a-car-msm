package agent.app.converter;

import agent.app.dto.PriceListCreateDTO;
import agent.app.model.PriceList;

public class PriceListConverter {

    public static PriceList toCreatePriceListFromRequest(PriceListCreateDTO priceListCreateDTO){

        return PriceList.builder()
                .creationDate(priceListCreateDTO.getCreationDate())
                .pricePerKm(priceListCreateDTO.getPricePerKm())
                .pricePerKmCDW(priceListCreateDTO.getPricePerKmCDW())
                .build();
    }
}
