package com.xiong.graduate.controller;

import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.CarportE;
import com.xiong.graduate.entity.RepairE;
import com.xiong.graduate.service.RepairEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/repair")
public class RepairEController {

    @Autowired
    private RepairEService repairEService;

    @RequestMapping("/queryRepair")
    public MyPage<List> queryRepair(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                     @RequestParam(name = "pageSize", defaultValue = "8") Integer pageSize,
                                     @RequestParam(name = "repairNumber", required = false) String repairNumber){
        return repairEService.queryRepair(currentPage, pageSize,repairNumber);
    }

    @RequestMapping("/addRepair")
    public AllResult<RepairE> addRepair(@RequestBody RepairE repairE){
        return repairEService.addRepair(repairE);
    }

    @RequestMapping("/getRepairById")
    public RepairE getRepairById(@RequestParam(name = "id")Integer id){
        return repairEService.getById(id);
    }

    @RequestMapping("/editRepair")
    public AllResult<RepairE> editRepair(@RequestBody RepairE repairE){
        return repairEService.editRepair(repairE);
    }

    @RequestMapping("/removeRepairById")
    public Boolean delete(@RequestParam(name = "id")Integer id){ return repairEService.removeById(id);}
}
