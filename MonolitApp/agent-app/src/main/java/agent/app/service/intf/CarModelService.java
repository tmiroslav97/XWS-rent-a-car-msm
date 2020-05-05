package agent.app.service.intf;

import agent.app.model.CarModel;

import java.util.List;

public interface CarModelService {
    CarModel findById(Long id);

    List<CarModel> findAll();

    Integer createCarModel(CarModel carModel);

    Integer editCarModel(CarModel carModel);

    Integer deleteById(Long id);

    void delete(CarModel carModel);

    CarModel save(CarModel carModel);
}
