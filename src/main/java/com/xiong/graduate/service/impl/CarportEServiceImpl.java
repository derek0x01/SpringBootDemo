package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.CarportDTO;
import com.xiong.graduate.entity.CarportE;
import com.xiong.graduate.mapper.CarportEMapper;
import com.xiong.graduate.service.CarportEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarportEServiceImpl extends ServiceImpl<CarportEMapper, CarportE> implements CarportEService {

    @Autowired
    private CarportEService carportEService;

    @Override
    public MyPage<List> queryCarport(Integer currentPage, Integer pageSize, String carportNumber) {
        QueryWrapper<CarportE> carportEQueryWrapper = new QueryWrapper<>();
        if(carportNumber!=null){
            carportEQueryWrapper.like("carport_number",carportNumber);
        }

        Page<CarportE> carportEPage=new Page<>(currentPage,pageSize);
        IPage<CarportE> iPage =carportEService.page(carportEPage,carportEQueryWrapper);
        List<CarportE> carportEList = iPage.getRecords();

        ModelMapper modelMapper =new ModelMapper();
        List<CarportDTO> carportDTOS =modelMapper.map(carportEList,new TypeToken<List<CarportDTO>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(carportDTOS,total);
    }

    @Override
    public AllResult<CarportE> addCarport(CarportE carportE) {
        carportEService.save(carportE);
        return new AllResult<>(200,"添加成功");
    }

    @Override
    public AllResult<CarportE> editCarport(CarportE carportE) {
        if(carportEService.updateById(carportE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }
}
