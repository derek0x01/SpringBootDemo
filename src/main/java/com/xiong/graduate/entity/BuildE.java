package com.xiong.graduate.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("build")
public class BuildE implements Serializable {

    @TableId(value = "id",type = IdType.AUTO)
    private int id;

    @TableField(value = "build_address")
    private String buildAddress;

    @TableField(value = "build_area")
    private String buildArea;

    @TableField(value = "build_height")
    private String buildHeight;

    @TableField(value = "build_note")
    private String buildNote;

    @TableField(value = "build_state")
    private String buildState;

    @TableField(value = "build_time")
    private String buildTime;

}
