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
@TableName("clean")
public class CleanE {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;

    @TableField(value = "clean_place")
    private String cleanPlace;

    @TableField(value = "clean_manager")
    private String cleanManager;

    @TableField(value = "clean_person")
    private String cleanPerson;

    @TableField(value = "clean_time")
    private String cleanTime;
}
