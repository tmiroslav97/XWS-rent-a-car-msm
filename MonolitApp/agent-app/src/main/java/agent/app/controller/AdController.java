package agent.app.controller;

import agent.app.dto.AdCreateDTO;
import agent.app.dto.AdPageDTO;
import agent.app.service.intf.AdService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/ad",  produces = MediaType.APPLICATION_JSON_VALUE)
public class AdController {

    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> createAd(@RequestBody AdCreateDTO adCreateDTO){
        return new ResponseEntity<>(adService.createAd(adCreateDTO), HttpStatus.CREATED);
    }

    @RequestMapping(value = "{?page,size,sort}", method = RequestMethod.GET)
    public ResponseEntity<?> findAllPageAd(@PathVariable("page") Integer page,@PathVariable("size") Integer size,
                                         @PathVariable("sort") String sort) {
        return new ResponseEntity<>(adService.findAllPageAd(page, size, sort), HttpStatus.OK);
    }

}
