package services.app.authenticationservice.controller;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class PublisherUserDTO {
    private Long publisherUserId;
    private String publisherUserFirstName;
    private String publisherUserLastName;
}
