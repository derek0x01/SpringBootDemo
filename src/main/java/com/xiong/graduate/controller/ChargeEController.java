package com.xiong.graduate.controller;

import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.ChargeE;
import com.xiong.graduate.service.ChargeEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/charge")
public class ChargeEController {

    @Autowired
    private ChargeEService chargeEService;

    @RequestMapping("/queryCharge")
    public MyPage<List> queryCharge(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                   @RequestParam(name = "pageSize", defaultValue = "8") Integer pageSize,
                                   @RequestParam(name = "chargeNumber", required = false) String chargeNumber){
        return chargeEService.queryCharge(currentPage, pageSize,chargeNumber);
    }

    @RequestMapping("/addCharge")
    public AllResult<ChargeE> addCharge(@RequestBody ChargeE chargeE){
        return chargeEService.addCharge(chargeE);
    }

    @RequestMapping("/getChargeById")
    public ChargeE getChargeById(@RequestParam(name = "id")Integer id){
        return chargeEService.getById(id);
    }

    @RequestMapping("/editCharge")
    public AllResult<ChargeE> editCharge(@RequestBody ChargeE chargeE){
        return chargeEService.editCharge(chargeE);
    }

    @RequestMapping("/removeChargeById")
    public Boolean delete(@RequestParam(name = "id")Integer id){ return chargeEService.removeById(id);}
}
