package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.AdminE;
import com.xiong.graduate.mapper.AdminEMapper;
import com.xiong.graduate.service.AdminEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AdminEServiceImpl extends ServiceImpl<AdminEMapper, AdminE> implements AdminEService {

    @Autowired
    private AdminEService adminEService;

    @Override
    public AllResult<AdminE> login(AdminE adminE) {
        QueryWrapper<AdminE> adminEQueryWrapper=new QueryWrapper<>();
        adminEQueryWrapper.eq("admin_name",adminE.getAdminName()).eq("admin_password",adminE.getAdminPassword());
        AdminE adminE2 =getOne(adminEQueryWrapper);
        if (adminE2 ==null){
            return new AllResult<AdminE>(500,"登录失败");
        }
        return new AllResult<AdminE>(200,"登录成功");
    }

    @Override
    public AllResult<AdminE> getAdminByName(String adminName) {
        QueryWrapper<AdminE> adminEQueryWrapper=new QueryWrapper<>();
        adminEQueryWrapper.eq("admin_name",adminName);
        AdminE adminE =getOne(adminEQueryWrapper);
        if(adminE ==null){
            return new AllResult<>(500,"获取失败");
        }
        return new AllResult<>(adminE,200,"获取成功");
    }

    @Override
    public AllResult<AdminE> editAdmin(AdminE adminE) {
        if(adminEService.updateById(adminE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }
}
