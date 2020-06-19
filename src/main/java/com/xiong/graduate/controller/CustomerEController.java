package com.xiong.graduate.controller;

import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.BuildE;
import com.xiong.graduate.entity.CustomerE;
import com.xiong.graduate.service.CustomerEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerEController {

    @Autowired
    private CustomerEService customerEService;

    @RequestMapping("/queryCustomer")
    public MyPage<List> queryCustomer(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                   @RequestParam(name = "pageSize", defaultValue = "8") Integer pageSize,
                                   @RequestParam(name = "customerName", required = false) String customerName){
        return customerEService.queryCustomer(currentPage, pageSize,customerName);
    }

    @RequestMapping("/addCustomer")
    public AllResult<CustomerE> addCustomer(@RequestBody CustomerE customerE){
        return customerEService.addCustomer(customerE);
    }

    @RequestMapping("/getCustomerById")
    public CustomerE getCustomerById(@RequestParam(name = "customerId")Integer customerId){
        return customerEService.getById(customerId);
    }

    @RequestMapping("/editCustomer")
    public AllResult<CustomerE> editRoom(@RequestBody CustomerE customerE){
        return customerEService.editCustomer(customerE);
    }

    @RequestMapping("/removeCustomerById")
    public Boolean delete(@RequestParam(name = "customerId")Integer customerId){ return customerEService.removeById(customerId);}
}
