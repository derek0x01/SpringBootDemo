package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.BuildE;

import java.util.List;

public interface BuildEService extends IService<BuildE> {
    MyPage<List> queryBuild(Integer currentPage, Integer pageSize, String buildAddress);
    AllResult<BuildE> addBuild(BuildE buildE);
    AllResult<BuildE> editBuild(BuildE buildE);
}
