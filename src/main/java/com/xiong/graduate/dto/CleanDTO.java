package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CleanDTO {
    private Integer id;
    private String cleanPlace;
    private String cleanManager;
    private String cleanPerson;
    private String cleanTime;
}
