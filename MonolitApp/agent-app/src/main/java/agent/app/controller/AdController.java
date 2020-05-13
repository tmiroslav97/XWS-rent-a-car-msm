package agent.app.controller;

import agent.app.dto.AdCreateDTO;
import agent.app.service.intf.AdService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/ad", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdController {

    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }


    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_AGENT')")
    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createAd(@RequestBody AdCreateDTO adCreateDTO) {
        System.out.println("nesto");
        Integer flag = adService.createAd(adCreateDTO);
        if (flag == 1) {
            System.out.println("nesto 1");
            return new ResponseEntity<>("Oglas uspesno kreiran.", HttpStatus.CREATED);
        } else if (flag == 2) {
            System.out.println("nesto 2");
            return new ResponseEntity<>("Desila se greska prilikom kreiranja automobila.", HttpStatus.BAD_REQUEST);
        } else if (flag == 3) {
            System.out.println("nesto 3");
            return new ResponseEntity<>("Desila se greska prilikom kreiranja cenovnika.", HttpStatus.BAD_REQUEST);
        } else if (flag == 4) {
            System.out.println("nesto 4");
            return new ResponseEntity<>("Desila se greska prilikom dodavanja vec postojeceg cenovnika.", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>("Desila se greska.", HttpStatus.BAD_REQUEST);
        }

    }

//    @RequestMapping(value = "{?page,size,sort}", method = RequestMethod.GET)
//    public ResponseEntity<?> findAllPageAd(@PathVariable("page") Integer page,@PathVariable("size") Integer size,
//                                         @PathVariable("sort") String sort) {
//        return new ResponseEntity<>(adService.findAllPageAd(page, size, sort), HttpStatus.OK);
//    }
@PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_AGENT') or hasAuthority('ROLE_ADMIN')")
@RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> findAllPageAd(@RequestParam(value = "nextPage", required = false) Integer nextPage, @RequestParam(value = "size", required = false) Integer size) {

        if (nextPage != null) {
            System.out.println("ima 1 str");
            return new ResponseEntity<>(adService.findAll(nextPage, size), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(adService.findAll(), HttpStatus.OK);
        }

    }

}
