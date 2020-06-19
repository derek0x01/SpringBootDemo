package com.xiong.graduate.controller;

import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.AdminE;
import com.xiong.graduate.entity.UserE;
import com.xiong.graduate.service.AdminEService;
import com.xiong.graduate.service.UserEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
public class LoginController {

    @Autowired
    private AdminEService adminEService;

    @Autowired
    private UserEService userEService;

//    @PostMapping("/login")
//    public AllResult<AdminE> Login(@RequestParam String name,@RequestParam String password){
//        return adminEService.login(name,password);
//    }
    @RequestMapping("/login")
    public AllResult<AdminE> login(@RequestBody AdminE adminE){
        return adminEService.login(adminE);
    }

    @RequestMapping("/loginTwo")
    public AllResult<UserE> loginTwo(@RequestBody UserE userE){
        return userEService.login(userE);
    }


}
