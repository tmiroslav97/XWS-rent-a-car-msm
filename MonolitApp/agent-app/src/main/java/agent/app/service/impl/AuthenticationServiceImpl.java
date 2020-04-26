package agent.app.service.impl;

import agent.app.authentication.JwtAuthenticationRequest;
import agent.app.dto.SignUpDTO;
import agent.app.model.Authority;
import agent.app.model.EndUser;
import agent.app.model.User;
import agent.app.repository.AuthorityRepository;
import agent.app.security.TokenUtils;
import agent.app.service.intf.AuthenticationService;

import agent.app.service.intf.AuthorityService;
import agent.app.service.intf.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationService.class);

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthorityService authorityService;

    @Autowired
    private UserService userService;

    @Override
    public String login(JwtAuthenticationRequest jwtAuthenticationRequest) {
        final Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(jwtAuthenticationRequest.getUsername(),
                        jwtAuthenticationRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = (User) authentication.getPrincipal();
        List<String> roles = user.getAuthorities().stream().map(authority -> authority.getName()).collect(Collectors.toList());
        String jwt = tokenUtils.generateToken(user.getEmail(), roles);
        return jwt;
    }

    @Override
    public Integer signUp(SignUpDTO signUpDTO) {
        if (userService.existsByEmail(signUpDTO.getEmail())) {
            return 1;
        } else {
            List<Authority> auths = authorityService.findByName("ROLE_PATIENT");
            EndUser endUser = EndUser.endUserBuilder()
                    .email(signUpDTO.getEmail())
                    .firstName(signUpDTO.getFirstName())
                    .lastName(signUpDTO.getLastName())
                    .deleted(false)
                    .enabled(true)
                    .password(passwordEncoder.encode(signUpDTO.getPassword()))
                    .canceledCnt(0)
                    .adLimitNum(3)
                    .obliged(false)
                    .ads(new HashSet<>())
                    .authorities(auths)
                    .priceLists(new HashSet<>())
                    .comments(new HashSet<>())
                    .inbox(new HashSet<>())
                    .reports(new HashSet<>())
                    .requests(new HashSet<>())
                    .build();
            userService.save(endUser);
            return 2;
        }
    }
}
