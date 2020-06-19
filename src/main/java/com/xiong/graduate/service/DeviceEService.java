package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.DeviceE;

import java.util.List;

public interface DeviceEService extends IService<DeviceE> {
    MyPage<List> queryDevice(Integer currentPage, Integer pageSize, String deviceName);
    AllResult<DeviceE> addDevice(DeviceE deviceE);
    AllResult<DeviceE> editDevice(DeviceE deviceE);
}
