package agent.app.service.intf;

import agent.app.authentication.JwtAuthenticationRequest;

public interface AuthenticationService {
    String login(JwtAuthenticationRequest jwtAuthenticationRequest);
}
