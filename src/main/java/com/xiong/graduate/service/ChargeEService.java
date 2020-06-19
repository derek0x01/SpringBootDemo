package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.ChargeE;
import com.xiong.graduate.entity.CleanE;

import java.util.List;

public interface ChargeEService extends IService<ChargeE> {
    MyPage<List> queryCharge(Integer currentPage, Integer pageSize, String chargeNumber);
    AllResult<ChargeE> addCharge(ChargeE chargeE);
    AllResult<ChargeE> editCharge(ChargeE chargeE);
}
