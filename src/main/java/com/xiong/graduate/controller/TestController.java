package com.xiong.graduate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Map;

@Controller
public class TestController {

    @RequestMapping("/success2")
    public String success2(Map<String,Object> map){
        //存入数据

        return "success";
    }

}
