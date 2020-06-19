package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.CleanE;

import java.util.List;

public interface CleanEService extends IService<CleanE> {
    MyPage<List> queryClean(Integer currentPage, Integer pageSize, String cleanManager);
    AllResult<CleanE> addClean(CleanE cleanE);
    AllResult<CleanE> editClean(CleanE cleanE);
}
