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
@TableName("carport")
public class CarportE implements Serializable {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;

    @TableField(value = "carport_number")
    private String carportNumber;

    @TableField(value = "carport_place")
    private String carportPlace;

    @TableField(value = "carport_time")
    private String carportTime;

    @TableField(value = "carport_state")
    private String carportState;
}
