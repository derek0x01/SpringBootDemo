package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.CarportE;

import java.util.List;

public interface CarportEService extends IService<CarportE> {
    MyPage<List> queryCarport(Integer currentPage, Integer pageSize, String carportNumber);
    AllResult<CarportE> addCarport(CarportE carportE);
    AllResult<CarportE> editCarport(CarportE carportE);
}
