package com.xiong.graduate.controller;

import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.CleanE;
import com.xiong.graduate.entity.UserE;
import com.xiong.graduate.service.UserEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserEController {

    @Autowired
    private UserEService userEService;


    @RequestMapping("/getUserByName")
    public AllResult<UserE> getUserByName(@RequestParam(name = "userName") String userName){
        return userEService.getUserByName(userName);
    }

    @RequestMapping("/editUser")
    public AllResult<UserE> editUser(@RequestBody UserE userE){
        return userEService.editUser(userE);
    }

    @RequestMapping("/queryUser")
    public MyPage<List> queryUser(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                   @RequestParam(name = "pageSize", defaultValue = "8") Integer pageSize,
                                   @RequestParam(name = "userName", required = false) String userName){
        return userEService.queryUser(currentPage, pageSize,userName);
    }

    @RequestMapping("/addUser")
    public AllResult<UserE> addUser(@RequestBody UserE userE){
        return userEService.addUser(userE);
    }

    @RequestMapping("/getUserById")
    public UserE getUserById(@RequestParam(name = "id")Integer id){
        return userEService.getById(id);
    }

    @RequestMapping("/removeUserById")
    public Boolean delete(@RequestParam(name = "id")Integer id){ return userEService.removeById(id);}
}

