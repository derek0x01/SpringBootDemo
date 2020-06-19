package com.xiong.graduate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BuildEDto {

    private int id;

    private String buildAddress;

    private String buildArea;

    private String buildHeight;

    private String buildNote;

    private String buildState;

    private String buildTime;
}
