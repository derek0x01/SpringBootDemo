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
@TableName("room")
public class RoomE implements Serializable {

    @TableId(value = "id",type = IdType.AUTO)
    private int id;

    @TableField(value = "number")
    private String number;

    @TableField(value = "rnumber")
    private String rnumber;

    @TableField(value = "area")
    private String area;

    @TableField(value = "type")
    private String type;
}
