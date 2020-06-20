package services.app.adservice.dto.user;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class PublishUserDTO {

    private String firstName;
    private String lastName;
    private String id;
}
