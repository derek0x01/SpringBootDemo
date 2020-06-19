package com.xiong.graduate.controller;

import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.BuildE;
import com.xiong.graduate.entity.RoomE;
import com.xiong.graduate.service.BuildEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/build")
public class BuildEController {

    @Autowired
    private BuildEService buildEService;

    @GetMapping("/queryBuild")
    private MyPage<List> queryBuild(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                   @RequestParam(name = "pageSize", defaultValue = "20") Integer pageSize,
                                   @RequestParam(name = "buildAddress", required = false) String buildAddress){
        return buildEService.queryBuild(currentPage, pageSize,buildAddress);
    }

    @RequestMapping("/addBuild")
    private AllResult<BuildE> addRoom(@RequestBody BuildE buildE){
        return buildEService.addBuild(buildE);
    }

    @RequestMapping("/getBuildById")
    private BuildE getRoomById(@RequestParam(name = "id")Integer id){
        return buildEService.getById(id);
    }

    @RequestMapping("/editBuild")
    private AllResult<BuildE> editRoom(@RequestBody BuildE buildE){
        return buildEService.editBuild(buildE);
    }

    @RequestMapping("/removeBuildById")
    private Boolean delete(@RequestParam(name = "id")Integer id){ return buildEService.removeById(id);}
}
