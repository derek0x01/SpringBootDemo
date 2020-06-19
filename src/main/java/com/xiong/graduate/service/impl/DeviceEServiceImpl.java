package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.CustomerDTO;
import com.xiong.graduate.dto.DeviceDTO;
import com.xiong.graduate.entity.CustomerE;
import com.xiong.graduate.entity.DeviceE;
import com.xiong.graduate.mapper.DeviceEMapper;
import com.xiong.graduate.service.DeviceEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceEServiceImpl extends ServiceImpl<DeviceEMapper, DeviceE> implements DeviceEService {

    @Autowired
    private DeviceEService deviceEService;

    @Override
    public MyPage<List> queryDevice(Integer currentPage, Integer pageSize, String deviceName) {
        QueryWrapper<DeviceE> deviceEQueryWrapper = new QueryWrapper<>();
        if(deviceName!=null) {
            deviceEQueryWrapper.like("device_name", deviceName);
        }

        Page<DeviceE> deviceEPage=new Page<>(currentPage,pageSize);
        IPage<DeviceE> iPage=deviceEService.page(deviceEPage,deviceEQueryWrapper);
        List<DeviceE> deviceEList=iPage.getRecords();//获取所有记录

        ModelMapper modelMapper =new ModelMapper();
        List<DeviceDTO> deviceDTOList =modelMapper.map(deviceEList,new TypeToken<List<DeviceDTO>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(deviceDTOList,total);
    }

    @Override
    public AllResult<DeviceE> addDevice(DeviceE deviceE) {
        deviceEService.save(deviceE);
        return new AllResult<>(200,"添加成功");
    }

    @Override
    public AllResult<DeviceE> editDevice(DeviceE deviceE) {
        if(deviceEService.updateById(deviceE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }
}
