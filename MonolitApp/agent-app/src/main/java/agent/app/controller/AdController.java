package agent.app.controller;

import agent.app.dto.AdCreateDTO;
import agent.app.service.intf.AdService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/ad",  produces = MediaType.APPLICATION_JSON_VALUE)
public class AdController {

    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }


    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_AGENT')")
    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createAd(@RequestBody AdCreateDTO adCreateDTO){
        Integer flag = adService.createAd(adCreateDTO);
        if(flag == 1){
            return new ResponseEntity<>("Oglas uspesno kreiran.", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("Desila se greska.", HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "{?page,size,sort}", method = RequestMethod.GET)
    public ResponseEntity<?> findAllPageAd(@PathVariable("page") Integer page,@PathVariable("size") Integer size,
                                         @PathVariable("sort") String sort) {
        return new ResponseEntity<>(adService.findAllPageAd(page, size, sort), HttpStatus.OK);
    }

}
