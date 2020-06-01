package agent.app.converter;

import agent.app.dto.enduser.EndUserDTO;
import agent.app.model.EndUser;

public class EndUserConverter extends AbstractConverter {

    public static EndUserDTO fromEndUserToEndUserDTO(EndUser endUser) {
        return EndUserDTO.builder()
                .email(endUser.getEmail())
                .firstName(endUser.getFirstName())
                .lastName(endUser.getLastName())
                .canceledCnt(endUser.getCanceledCnt())
                .enabled(endUser.getEnabled())
                .obligated(endUser.getObliged())
                .build();
    }
}