package agent.app.controller;

import agent.app.authentication.JwtAuthenticationRequest;
import agent.app.dto.SignUpDTO;
import agent.app.service.intf.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> login(@RequestBody JwtAuthenticationRequest authenticationRequest) {
        return new ResponseEntity<>(authenticationService.login(authenticationRequest), HttpStatus.OK);
    }

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> signUp(@RequestBody SignUpDTO signUpDTO) {
        Integer retVal = authenticationService.signUp(signUpDTO);
        if (retVal == 1) {
            return new ResponseEntity<>("Email je zauzet.", HttpStatus.BAD_REQUEST);
        } else if (retVal == 2) {
            return new ResponseEntity<>("Lozinke se ne poklapaju.", HttpStatus.BAD_REQUEST);
        } else if (retVal == 3) {
            return new ResponseEntity<>("Uspjesna registracija!", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Nepoznat zahtjev", HttpStatus.BAD_REQUEST);
        }
    }
}
