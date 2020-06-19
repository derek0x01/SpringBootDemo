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
@TableName("admin")
public class AdminE implements Serializable {


    @TableId(value = "id",type = IdType.AUTO)
    private int id;

    @TableField(value = "admin_name")
    private String adminName;

    @TableField(value = "admin_password")
    private String adminPassword;

    @TableField(value = "admin_sex")
    private String adminSex;

    @TableField(value = "admin_phone")
    private String adminPhone;

    @TableField(value = "admin_email")
    private String adminEmail;

}
