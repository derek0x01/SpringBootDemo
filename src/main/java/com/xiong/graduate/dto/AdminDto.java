package com.xiong.graduate.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminDto {

    private String adminName;

    //private int adminSex;

    private String state;

    private String message;

    private String adminEmail;

}
