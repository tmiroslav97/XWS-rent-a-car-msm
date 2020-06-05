package services.app.adsearchservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.joda.time.DateTime;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.app.adsearchservice.converter.DateAPI;
import services.app.adsearchservice.service.intf.AdService;


@RestController
@RequestMapping(value = "/ad", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdController {

    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> findAllPageAd(@RequestParam(value = "nextPage", required = false) Integer nextPage,
                                           @RequestParam(value = "size", required = false) Integer size) {

        if (nextPage != null) {
            System.out.println("ima 1 str");
            return new ResponseEntity<>(adService.findAll(nextPage, size), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(adService.findAll(), HttpStatus.OK);
        }

    }

    @RequestMapping(path = "/search", method = RequestMethod.GET)
    public ResponseEntity<?> findAllSearch(@RequestParam(value = "nextPage", required = false) Integer nextPage,
                                           @RequestParam(value = "size", required = false) Integer size,
                                           @RequestParam(value = "location") String location,
                                           @RequestParam(value = "startDate") String startDate,
                                           @RequestParam(value = "endDate") String endDate) {


        DateTime startD = DateAPI.dateStringToDateTime(startDate);
        DateTime endD = DateAPI.dateStringToDateTime(endDate);
//        System.out.println(startD);
//        System.out.println(endD);
//        System.out.println(startD.toString(DateTimeFormat.forPattern("HH:mm dd-MM-yyyy")));
//        System.out.println(endD.toString(DateTimeFormat.forPattern("HH:mm dd-MM-yyyy")));
//        System.out.println(location);

        return new ResponseEntity<>(adService.findAllOrdinarySearch(nextPage, size, location, startD, endD), HttpStatus.OK);
    }
}
