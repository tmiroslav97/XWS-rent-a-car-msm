package agent.app.converter;

import agent.app.dto.PriceListCreateDTO;
import agent.app.model.PriceList;

public class PriceListConverter {

    public static PriceList toCreatePriceListFromRequest(PriceListCreateDTO priceListCreateDTO){

        return PriceList.builder()
                .startDate(priceListCreateDTO.getStartDate())
                .endDate(priceListCreateDTO.getEndDate())
                .pricePerKm(priceListCreateDTO.getPricePerKm())
                .pricePerKmCDW(priceListCreateDTO.getPricePerKmCDW())
                .build();
    }
}
