package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChargeDTO {
    private Integer id;
    private String chargeNumber;
    private String chargeName;
    private String chargePerson;
    private String chargeAmount;
    private String chargeTime;
}
