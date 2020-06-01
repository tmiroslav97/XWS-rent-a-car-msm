package agent.app.controller;

import agent.app.converter.AdConverter;
import agent.app.converter.PriceListConverter;
import agent.app.dto.PriceListCreateDTO;
import agent.app.model.CarModel;
import agent.app.model.PriceList;
import agent.app.service.intf.PriceListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/pricelist", produces = MediaType.APPLICATION_JSON_VALUE)
public class PriceListController {

    private final PriceListService priceListService;

    public PriceListController(PriceListService priceListService){
        this.priceListService = priceListService;
    }

    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_AGENT')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> findAllPriceList() {
        return new ResponseEntity<>(priceListService.findAll().stream()
                .map(PriceListConverter::toCreatePriceListCreateDTOFromPriceList)
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_AGENT')")
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createPriceList(@RequestBody PriceListCreateDTO priceListCreateDTO, Principal principal) {
        System.out.println(principal.getName());
        priceListCreateDTO.setPublisherUsername(principal.getName());
        PriceList priceList = priceListService.createPriceList(priceListCreateDTO);
        return new ResponseEntity<>("Cenovnik uspesno kreiran.", HttpStatus.OK);
    }

}
