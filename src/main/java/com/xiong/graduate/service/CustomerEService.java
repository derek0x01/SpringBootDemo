package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.CustomerE;

import java.util.List;

public interface CustomerEService extends IService<CustomerE> {
    MyPage<List> queryCustomer(Integer currentPage, Integer pageSize, String customerName);
    AllResult<CustomerE> addCustomer(CustomerE customerE);
    AllResult<CustomerE> editCustomer(CustomerE customerE);
}
