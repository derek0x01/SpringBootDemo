package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.AdminE;
import com.xiong.graduate.entity.UserE;

public interface AdminEService extends IService<AdminE> {
    AllResult<AdminE> login (AdminE adminE);
    AllResult<AdminE> getAdminByName(String adminName);
    AllResult<AdminE> editAdmin(AdminE adminE);

}
