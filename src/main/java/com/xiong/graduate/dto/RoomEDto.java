package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomEDto {
    private int id;
    private String number;
    private String rnumber;
    private String area;
    private String type;
}
