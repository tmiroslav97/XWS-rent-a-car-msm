package services.app.authenticationservice.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import services.app.authenticationservice.dto.VerificationResponse;
import services.app.authenticationservice.service.intf.EndUserService;
import services.app.authenticationservice.service.intf.UserService;

@RestController
@RequestMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/find-publish-user", method = RequestMethod.POST)
    public Long findPublishUserByEmail(@RequestBody String email) {
        return userService.findByEmail(email).getId();
    }
}
