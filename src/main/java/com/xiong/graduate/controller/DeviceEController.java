package com.xiong.graduate.controller;

import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.entity.DeviceE;
import com.xiong.graduate.entity.DeviceE;
import com.xiong.graduate.service.DeviceEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/device")
public class DeviceEController {
    
    @Autowired
    private DeviceEService deviceEService;

    @RequestMapping("/queryDevice")
    public MyPage<List> queryDevice(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                      @RequestParam(name = "pageSize", defaultValue = "8") Integer pageSize,
                                      @RequestParam(name = "deviceName", required = false) String deviceName){
        return deviceEService.queryDevice(currentPage, pageSize,deviceName);
    }

    @RequestMapping("/addDevice")
    public AllResult<DeviceE> addDevice(@RequestBody DeviceE deviceE){
        return deviceEService.addDevice(deviceE);
    }

    @RequestMapping("/getDeviceById")
    public DeviceE getDeviceById(@RequestParam(name = "id")Integer id){
        return deviceEService.getById(id);
    }

    @RequestMapping("/editDevice")
    public AllResult<DeviceE> editRoom(@RequestBody DeviceE deviceE){
        return deviceEService.editDevice(deviceE);
    }

    @RequestMapping("/removeDeviceById")
    public Boolean delete(@RequestParam(name = "id")Integer id){ return deviceEService.removeById(id);}
}
