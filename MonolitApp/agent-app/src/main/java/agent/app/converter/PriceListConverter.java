package agent.app.converter;

import agent.app.dto.PriceListCreateDTO;
import agent.app.model.PriceList;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import java.util.Date;

public class PriceListConverter {

    public static PriceList toCreatePriceListFromRequest(PriceListCreateDTO priceListCreateDTO){
        DateTimeFormatter dtf = DateTimeFormat.forPattern("yyyy-MM-dd");
        DateTime dt = dtf.parseDateTime(priceListCreateDTO.getCreationDate());

        return PriceList.builder()
//                .creationDate(dt)
                .creationDate(new DateTime(DateTimeZone.UTC))
                .pricePerKm(priceListCreateDTO.getPricePerKm())
                .pricePerKmCDW(priceListCreateDTO.getPricePerKmCDW())
                .pricePerDay(priceListCreateDTO.getPricePerDay())
                .build();
    }
}
