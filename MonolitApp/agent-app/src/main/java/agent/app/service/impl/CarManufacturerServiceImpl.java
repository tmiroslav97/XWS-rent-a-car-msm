package agent.app.service.impl;

import agent.app.dto.CarManufacturerDTO;
import agent.app.exception.ExistsException;
import agent.app.exception.NotFoundException;
import agent.app.model.CarManufacturer;
import agent.app.repository.CarManufacturerRepository;
import agent.app.service.intf.CarManufacturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
public class CarManufacturerServiceImpl implements CarManufacturerService {

    @Autowired
    private CarManufacturerRepository carManufacturerRepository;

    @Override
    public CarManufacturer findById(Long id) {
        return carManufacturerRepository.findById(id).orElseThrow(() -> new NotFoundException("Proizvodjac automobila ne postoji u sifarniku."));
    }

    @Override
    public List<CarManufacturer> findAll() {
        return carManufacturerRepository.findAll();
    }

    @Override
    public CarManufacturerDTO findAll(Integer page) {
        Pageable pageable = PageRequest.of(page, 10, Sort.by("name").ascending());
        Page<CarManufacturer> carManufacturerPage = carManufacturerRepository.findAll(pageable);
        CarManufacturerDTO carManufacturerDTO = CarManufacturerDTO.builder()
                .totalPageCnt(carManufacturerPage.getTotalPages())
                .carManufacturers(carManufacturerPage.getContent())
                .build();

        return carManufacturerDTO;
    }

    @Override
    public Integer createCarManufacturer(String name) {
        CarManufacturer carManufacturer = CarManufacturer.builder()
                .name(name)
                .carModels(new HashSet<>())
                .build();
        this.save(carManufacturer);
        return 1;
    }

    @Override
    public Integer editCarManufacturer(CarManufacturer carManufacturer) {
        this.findById(carManufacturer.getId());
        carManufacturerRepository.save(carManufacturer);
        return 1;
    }

    @Override
    public Integer deleteById(Long id) {
        CarManufacturer carManufacturer = this.findById(id);
        this.delete(carManufacturer);
        return 1;
    }

    @Override
    public void delete(CarManufacturer carManufacturer) {
        carManufacturerRepository.delete(carManufacturer);
    }

    @Override
    public CarManufacturer save(CarManufacturer carManufacturer) {
        if (carManufacturerRepository.existsByName(carManufacturer.getName())) {
            throw new ExistsException(String.format("Proizvodjac automobila sa imenom '%s' vec postoji u sifarniku", carManufacturer.getName()));
        }

        return carManufacturerRepository.save(carManufacturer);
    }
}
