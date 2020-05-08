package agent.app.controller;

import agent.app.dto.AdCreateDTO;
import agent.app.service.intf.AdService;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;


@RestController
@RequestMapping(value = "/ad",  produces = MediaType.APPLICATION_JSON_VALUE)
public class AdController {

    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }

    ObjectMapper objectMapper = new ObjectMapper();

    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_AGENT')")
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createAd(@RequestParam(value="coverPhoto", required = true) MultipartFile coverPhoto, @RequestParam(value="data", required = true)  String data) throws IOException{
        System.out.println("-----------------------UPLOAD FILE---------------------");

        File convertFile = new File("C://Users//Svetlana//Desktop//Projekat//XWSProjekatMSM//MonolitApp//agent-app//photos//" + coverPhoto.getOriginalFilename());
        convertFile.createNewFile();
        FileOutputStream fout = new FileOutputStream(convertFile);
        fout.write(coverPhoto.getBytes());
        fout.close();

        System.out.println(data.toString());
        AdCreateDTO adCreateDTO = objectMapper.readValue(data, AdCreateDTO.class);
        adCreateDTO.setCoverPhoto(coverPhoto.getOriginalFilename());
        Integer flag = adService.createAd(adCreateDTO);
        if(flag == 1){
            System.out.println("nesto 1");
            return new ResponseEntity<>("Oglas uspesno kreiran.", HttpStatus.CREATED);
        }else if(flag == 2){
            System.out.println("nesto 2");
            return new ResponseEntity<>("Desila se greska prilikom kreiranja automobila.", HttpStatus.BAD_REQUEST);
        }else if(flag == 3) {
            System.out.println("nesto 3");
            return new ResponseEntity<>("Desila se greska prilikom kreiranja cenovnika.", HttpStatus.BAD_REQUEST);
        }else if(flag == 4){
            System.out.println("nesto 4");
            return new ResponseEntity<>("Desila se greska prilikom dodavanja vec postojeceg cenovnika.", HttpStatus.BAD_REQUEST);
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
