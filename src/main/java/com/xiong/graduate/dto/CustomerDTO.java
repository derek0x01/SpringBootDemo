package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDTO {
    private Integer customerId;
    private String customerName;
    private String customerSex;
    private String customerPhone;
    private String customerAddress;
    private String customerTime;
}
