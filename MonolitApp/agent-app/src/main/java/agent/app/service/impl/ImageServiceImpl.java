package agent.app.service.impl;

import agent.app.exception.ExistsException;
import agent.app.exception.NotFoundException;
import agent.app.model.Image;
import agent.app.repository.CarRepository;
import agent.app.repository.ImageRepository;
import agent.app.service.intf.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    private ImageRepository imageRepository;

    @Override
    public Image finById(Long id) {
        return imageRepository.findById(id).orElseThrow(()-> new NotFoundException("Slika ne postoji"));
    }

    @Override
    public List<Image> findAll() {
        return imageRepository.findAll();
    }

    @Override
    public Image save(Image image) {
        if(imageRepository.existsById(image.getId())){
            throw new ExistsException(String.format("Slika vec postoji."));
        }
        return imageRepository.save(image);
    }

    @Override
    public void delete(Image image) {
        imageRepository.delete(image);
    }

    @Override
    public Image createImage(Image image) {
        return this.save(image);
    }

    @Override
    public Image editImage(Image image) {
        this.finById(image.getId());
        return this.save(image);
    }

    @Override
    public Integer deleteById(Long id) {
        Image image = this.finById(id);
        this.delete(image);
        return 1;
    }
}
