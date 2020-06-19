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
@TableName("customer")
public class CustomerE implements Serializable {

    @TableId(value = "customer_id",type = IdType.AUTO)
    private Integer customerId;

    @TableField(value = "customer_name")
    private String customerName;

    @TableField(value = "customer_sex")
    private String customerSex;

    @TableField(value = "customer_phone")
    private String customerPhone;

    @TableField(value = "customer_address")
    private String customerAddress;

    @TableField(value = "customer_time")
    private String customerTime;
}
