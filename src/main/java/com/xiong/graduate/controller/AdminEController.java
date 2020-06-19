package com.xiong.graduate.controller;

import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.AdminE;
import com.xiong.graduate.service.AdminEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminEController {

    @Autowired
    private AdminEService adminEService;

    @RequestMapping("/getAdminByName")
    public AllResult<AdminE> getAdminByName(@RequestParam(name = "adminName") String adminName){
        return adminEService.getAdminByName(adminName);
    }

    @RequestMapping("/editAdmin")
    public AllResult<AdminE> editAdmin(@RequestBody AdminE adminE){
        return adminEService.editAdmin(adminE);
    }
}
