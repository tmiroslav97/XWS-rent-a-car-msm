package agent.app.dto.enduser;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EndUserDTO {
    String email;
    String firstName;
    String lastName;
    Integer canceledCnt;
    Boolean enabled;
    Boolean obligated;
}
