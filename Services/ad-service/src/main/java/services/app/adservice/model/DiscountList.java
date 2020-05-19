package services.app.adservice.model;

import lombok.*;
import services.app.adservice.common.db.DbTableConstants;

import javax.persistence.*;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
@Table(name = DbTableConstants.DISCOUNTLIST)
public class DiscountList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
