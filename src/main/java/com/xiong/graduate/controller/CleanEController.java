package com.xiong.graduate.controller;

import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.CleanE;
import com.xiong.graduate.service.CleanEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/clean")
public class CleanEController {
    
    @Autowired
    private CleanEService cleanEService;

    @RequestMapping("/queryClean")
    public MyPage<List> queryClean(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                    @RequestParam(name = "pageSize", defaultValue = "8") Integer pageSize,
                                    @RequestParam(name = "cleanManager", required = false) String cleanManager){
        return cleanEService.queryClean(currentPage, pageSize,cleanManager);
    }

    @RequestMapping("/addClean")
    public AllResult<CleanE> addClean(@RequestBody CleanE cleanE){
        return cleanEService.addClean(cleanE);
    }

    @RequestMapping("/getCleanById")
    public CleanE getCleanById(@RequestParam(name = "id")Integer id){
        return cleanEService.getById(id);
    }

    @RequestMapping("/editClean")
    public AllResult<CleanE> editClean(@RequestBody CleanE cleanE){
        return cleanEService.editClean(cleanE);
    }

    @RequestMapping("/removeCleanById")
    public Boolean delete(@RequestParam(name = "id")Integer id){ return cleanEService.removeById(id);}
}
