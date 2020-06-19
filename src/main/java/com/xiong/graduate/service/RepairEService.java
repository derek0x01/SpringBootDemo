package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.RepairE;

import java.util.List;

public interface RepairEService extends IService<RepairE> {
    MyPage<List> queryRepair(Integer currentPage, Integer pageSize, String repairNumber);
    AllResult<RepairE> addRepair(RepairE repairE);
    AllResult<RepairE> editRepair(RepairE repairE);
}
