package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeviceDTO {
    private Integer id;
    private String deviceNumber;
    private String deviceName;
    private String devicePlace;
    private String deviceTime;
    private String deviceCost;
}
