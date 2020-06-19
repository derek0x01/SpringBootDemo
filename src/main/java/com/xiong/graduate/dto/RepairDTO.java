package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RepairDTO {
    private Integer id;
    private String repairNumber;
    private String repairEvent;
    private String repairAddress;
    private String repairState;
    private String repairTime;
}
