package agent.app.service.intf;

import agent.app.model.FuelType;

import java.util.List;

public interface FuelTypeService {
    FuelType findById(Long id);

    List<FuelType> findAll();

    Integer createFuelType(String name);

    Integer editFuelType(FuelType fuelType);

    Integer deleteById(Long id);

    void delete(FuelType fuelType);

    FuelType save(FuelType fuelType);
}
