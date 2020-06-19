package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.CustomerDTO;
import com.xiong.graduate.dto.UserDTO;
import com.xiong.graduate.entity.CustomerE;
import com.xiong.graduate.entity.UserE;
import com.xiong.graduate.mapper.UserEMapper;
import com.xiong.graduate.service.UserEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserEServiceImpl extends ServiceImpl<UserEMapper, UserE> implements UserEService {

    @Autowired
    private UserEService userEService;

    @Override
    public AllResult<UserE> login(UserE userE) {
        QueryWrapper<UserE> userEQueryWrapper=new QueryWrapper<>();
        userEQueryWrapper.eq("user_name",userE.getUserName()).eq("user_password",userE.getUserPassword());
        UserE userE1 =getOne(userEQueryWrapper);
        if (userE1 ==null){
            return new AllResult<UserE>(500,"登录失败");
        }
        return new AllResult<UserE>(200,"登录成功");
    }

    @Override
    public AllResult<UserE> getUserByName(String userName) {
        QueryWrapper<UserE> userEQueryWrapper=new QueryWrapper<>();
        userEQueryWrapper.eq("user_name",userName);
        UserE userE1 =getOne(userEQueryWrapper);
        if(userE1 ==null){
            return new AllResult<>(500,"获取失败");
        }
        return new AllResult<>(userE1,200,"获取成功");
    }

    @Override
    public AllResult<UserE> editUser(UserE userE) {
        if(userEService.updateById(userE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }

    @Override
    public MyPage<List> queryUser(Integer currentPage, Integer pageSize, String userName) {
        QueryWrapper<UserE> userEQueryWrapper = new QueryWrapper<>();
        if(userName!=null) {
            userEQueryWrapper.like("user_name", userName);
        }

        Page<UserE> userEPage=new Page<>(currentPage,pageSize);
        IPage<UserE> iPage=userEService.page(userEPage,userEQueryWrapper);
        List<UserE> userEList=iPage.getRecords();//获取所有记录

        ModelMapper modelMapper =new ModelMapper();
        List<UserDTO> userDTOList =modelMapper.map(userEList,new TypeToken<List<UserDTO>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(userDTOList,total);
    }

    @Override
    public AllResult<UserE> addUser(UserE userE) {
        userEService.save(userE);
        return new AllResult<>(200,"添加成功");
    }
}
