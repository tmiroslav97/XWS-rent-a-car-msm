package agent.app.service.intf;

import agent.app.model.CarModelCodebook;

import java.util.List;

public interface CarModelCodebookService {
    CarModelCodebook findById(Long id);

    List<CarModelCodebook> findAll();

    Integer createCarModelCodebook(CarModelCodebook carModelCodebook);

    Integer editCarModelCodebook(CarModelCodebook carModelCodebook);

    Integer deleteById(Long id);

    void delete(CarModelCodebook carModelCodebook);

    CarModelCodebook save(CarModelCodebook carModelCodebook);
}
