package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Integer id;
    private String userName;
    private String userPassword;
    private String userSex;
    private String userPhone;
    private String userEmail;
}
