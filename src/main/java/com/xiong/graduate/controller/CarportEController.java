package com.xiong.graduate.controller;

import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.CarportE;
import com.xiong.graduate.entity.CustomerE;
import com.xiong.graduate.service.CarportEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/carport")
public class CarportEController {

    @Autowired
    private CarportEService carportEService;

    @RequestMapping("/queryCarport")
    public MyPage<List> queryCarport(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                      @RequestParam(name = "pageSize", defaultValue = "8") Integer pageSize,
                                      @RequestParam(name = "carportNumber", required = false) String CarportNumber){
        return carportEService.queryCarport(currentPage, pageSize,CarportNumber);
    }

    @RequestMapping("/addCarport")
    public AllResult<CarportE> addCarport(@RequestBody CarportE CarportE){
        return carportEService.addCarport(CarportE);
    }

    @RequestMapping("/getCarportById")
    public CarportE getCarportById(@RequestParam(name = "id")Integer id){
        return carportEService.getById(id);
    }

    @RequestMapping("/editCarport")
    public AllResult<CarportE> editRoom(@RequestBody CarportE CarportE){
        return carportEService.editCarport(CarportE);
    }

    @RequestMapping("/removeCarportById")
    public Boolean delete(@RequestParam(name = "id")Integer id){ return carportEService.removeById(id);}
}
