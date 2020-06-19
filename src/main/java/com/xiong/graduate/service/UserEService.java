package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.UserE;

import java.util.List;

public interface UserEService extends IService<UserE> {
    AllResult<UserE> login (UserE userE);
    AllResult<UserE> getUserByName(String userName);
    AllResult<UserE> editUser(UserE userE);

    MyPage<List> queryUser(Integer currentPage, Integer pageSize, String userName);
    AllResult<UserE> addUser(UserE userE);
}
