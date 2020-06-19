package com.xiong.graduate.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("charge")
public class ChargeE {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;

    @TableField(value = "charge_number")
    private String chargeNumber;

    @TableField(value = "charge_name")
    private String chargeName;

    @TableField(value = "charge_person")
    private String chargePerson;

    @TableField(value = "charge_amount")
    private String chargeAmount;

    @TableField(value = "charge_time")
    private String chargeTime;
}
