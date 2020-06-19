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
@TableName("repair")
public class RepairE implements Serializable {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;

    @TableField(value = "repair_number")
    private String repairNumber;

    @TableField(value = "repair_event")
    private String repairEvent;

    @TableField(value = "repair_address")
    private String repairAddress;

    @TableField(value = "repair_state")
    private String repairState;

    @TableField(value = "repair_time")
    private String repairTime;
}
