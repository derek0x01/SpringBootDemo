package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarportDTO {
    private Integer id;
    private String carportNumber;
    private String carportPlace;
    private String carportTime;
    private String carportState;

}
