package agent.app.model;

import java.util.List;

public class User {
    private Long id;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private List<Authority> authorities;

}