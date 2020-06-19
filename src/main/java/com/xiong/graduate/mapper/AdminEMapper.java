package com.xiong.graduate.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.xiong.graduate.entity.AdminE;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;


public interface AdminEMapper extends BaseMapper<AdminE> {

//    @Select("SELECT * FROM user where name = #{name}")
//    List<AdminE> selectByName(@Param("name") String name);

}
