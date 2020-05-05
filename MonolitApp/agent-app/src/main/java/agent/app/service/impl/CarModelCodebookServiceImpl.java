package agent.app.service.impl;

import agent.app.exception.ExistsException;
import agent.app.exception.NotFoundException;
import agent.app.model.CarModelCodebook;
import agent.app.repository.CarModelCodebookRepository;
import agent.app.service.intf.CarModelCodebookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarModelCodebookServiceImpl implements CarModelCodebookService {

    @Autowired
    private CarModelCodebookRepository carModelCodebookRepository;

    @Override
    public CarModelCodebook findById(Long id) {
        return carModelCodebookRepository.findById(id).orElseThrow(() -> new NotFoundException("Model auta iz sifarnika ne postoji."));
    }

    @Override
    public List<CarModelCodebook> findAll() {
        return carModelCodebookRepository.findAll();
    }

    @Override
    public Integer addCarModelCodebook(CarModelCodebook carModelCodebook) {
        if (carModelCodebookRepository.existsByName(carModelCodebook.getName())) {
            throw new ExistsException(String.format("Model auta iz sifarnika sa imenom '%s' vec postoji", carModelCodebook.getName()));
        }
        this.save(carModelCodebook);
        return 1;
    }

    @Override
    public Integer editCarModelCodebook(CarModelCodebook carModelCodebook) {
        this.findById(carModelCodebook.getId());
        this.save(carModelCodebook);
        return 1;
    }

    @Override
    public Integer deleteById(Long id) {
        CarModelCodebook carModelCodebook = this.findById(id);
        this.delete(carModelCodebook);
        return 1;
    }

    @Override
    public void delete(CarModelCodebook carModelCodebook) {
        carModelCodebookRepository.delete(carModelCodebook);
    }

    @Override
    public CarModelCodebook save(CarModelCodebook carModelCodebook) {
        return carModelCodebookRepository.save(carModelCodebook);
    }
}
