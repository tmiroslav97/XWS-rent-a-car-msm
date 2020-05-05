package agent.app.service.impl;

import agent.app.exception.ExistsException;
import agent.app.exception.NotFoundException;
import agent.app.model.CarModel;
import agent.app.repository.CarModelRepository;
import agent.app.service.intf.CarModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarModelServiceImpl implements CarModelService {

    @Autowired
    private CarModelRepository carModelRepository;

    @Override
    public CarModel findById(Long id) {
        return carModelRepository.findById(id).orElseThrow(() -> new NotFoundException("Model auta iz sifarnika ne postoji."));
    }

    @Override
    public List<CarModel> findAll() {
        return carModelRepository.findAll();
    }

    @Override
    public Integer createCarModel(CarModel carModel) {
        if (carModelRepository.existsByName(carModel.getName())) {
            throw new ExistsException(String.format("Model auta iz sifarnika sa imenom '%s' vec postoji", carModel.getName()));
        }
        this.save(carModel);
        return 1;
    }

    @Override
    public Integer editCarModel(CarModel carModel) {
        this.findById(carModel.getId());
        this.save(carModel);
        return 1;
    }

    @Override
    public Integer deleteById(Long id) {
        CarModel carModel = this.findById(id);
        this.delete(carModel);
        return 1;
    }

    @Override
    public void delete(CarModel carModel) {
        carModelRepository.delete(carModel);
    }

    @Override
    public CarModel save(CarModel carModel) {
        return carModelRepository.save(carModel);
    }
}
