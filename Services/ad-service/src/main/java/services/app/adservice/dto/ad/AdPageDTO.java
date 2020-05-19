package services.app.adservice.dto.ad;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class AdPageDTO {
    private Long id;
    private String name;
    private String coverPhoto;
    private String location;
    private Long price;

}
