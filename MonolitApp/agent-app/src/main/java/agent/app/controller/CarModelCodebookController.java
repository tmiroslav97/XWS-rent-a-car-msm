package agent.app.controller;

import agent.app.model.CarModelCodebook;
import agent.app.service.intf.CarModelCodebookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/cm-cb", produces = MediaType.APPLICATION_JSON_VALUE)
public class CarModelCodebookController {

    private final CarModelCodebookService carModelCodebookService;

    public CarModelCodebookController(CarModelCodebookService carModelCodebookService) {
        this.carModelCodebookService = carModelCodebookService;
    }

    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_AGENT') or hasAuthority('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(carModelCodebookService.findAll(), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_AGENT') or hasAuthority('ROLE_ADMIN')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getCarModelCodebook(@PathVariable("id") Long id) {
        return new ResponseEntity<>(carModelCodebookService.findById(id), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> createCarModelCodebook(@RequestBody CarModelCodebook carModelCodebook) {
        Integer flag = carModelCodebookService.createCarModelCodebook(carModelCodebook);
        if (flag == 1) {
            return new ResponseEntity<>("Model auta uspjesno kreiran.", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Desila se nepoznata greska.", HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> editCarModelCodebook(@RequestBody CarModelCodebook carModelCodebook) {
        Integer flag = carModelCodebookService.editCarModelCodebook(carModelCodebook);
        if (flag == 1) {
            return new ResponseEntity<>("Model auta uspjesno izmjenjen.", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Desila se nepoznata greska.", HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCarModelCodebook(@RequestBody Long id) {
        Integer flag = carModelCodebookService.deleteById(id);
        if (flag == 1) {
            return new ResponseEntity<>("Model auta uspjesno obrisan.", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Desila se nepoznata greska.", HttpStatus.BAD_REQUEST);
        }
    }

}
