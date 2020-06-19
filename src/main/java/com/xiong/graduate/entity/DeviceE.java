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
@NoArgsConstructor
@AllArgsConstructor
@TableName("device")
public class DeviceE implements Serializable {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;

    @TableField(value = "device_number")
    private String deviceNumber;

    @TableField(value = "device_name")
    private String deviceName;

    @TableField(value = "device_place")
    private String devicePlace;

    @TableField(value = "device_time")
    private String deviceTime;

    @TableField(value = "device_cost")
    private String deviceCost;
}
