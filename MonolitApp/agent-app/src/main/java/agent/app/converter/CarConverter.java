package agent.app.converter;

import agent.app.dto.CarCreateDTO;
import agent.app.model.Car;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

public class CarConverter {
    public static Car toCreateCarFromRequest(CarCreateDTO carCreateDTO){
//        DateTime dt = DateAPI.DateTimeFromString(carCreateDTO.getYear());
        return Car.builder()
                .year(DateAPI.DateTimeNow())
                .carManufacturer(carCreateDTO.getCarManufacturer())
                .carModel(carCreateDTO.getCarModel())
                .gearboxType(carCreateDTO.getGearboxType())
                .fuelType(carCreateDTO.getFuelType())
                .carType(carCreateDTO.getCarType())
                .mileage(carCreateDTO.getMileage())
                .childrenSeatNum(carCreateDTO.getChildrenSeatNum())
                .cdw(carCreateDTO.getCdw())
                .androidFlag(carCreateDTO.getAndroidFlag())
                .build();
    }
}
