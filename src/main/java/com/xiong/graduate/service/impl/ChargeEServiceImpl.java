package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.ChargeDTO;
import com.xiong.graduate.entity.ChargeE;
import com.xiong.graduate.mapper.ChargeEMapper;
import com.xiong.graduate.service.ChargeEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChargeEServiceImpl extends ServiceImpl<ChargeEMapper, ChargeE> implements ChargeEService {

    @Autowired
    private ChargeEService chargeEService;

    @Override
    public MyPage<List> queryCharge(Integer currentPage, Integer pageSize, String chargeNumber) {
        QueryWrapper<ChargeE> chargeEQueryWrapper = new QueryWrapper<>();
        if(chargeNumber!=null) {
            chargeEQueryWrapper.like("charge_number", chargeNumber);
        }

        Page<ChargeE> chargeEPage=new Page<>(currentPage,pageSize);
        IPage<ChargeE> iPage=chargeEService.page(chargeEPage,chargeEQueryWrapper);
        List<ChargeE> chargeEList=iPage.getRecords();//获取所有记录

        ModelMapper modelMapper =new ModelMapper();
        List<ChargeDTO> chargeDTOList =modelMapper.map(chargeEList,new TypeToken<List<ChargeDTO>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(chargeDTOList,total);
    }

    @Override
    public AllResult<ChargeE> addCharge(ChargeE chargeE) {
        chargeEService.save(chargeE);
        return new AllResult<>(200,"添加成功");
    }

    @Override
    public AllResult<ChargeE> editCharge(ChargeE chargeE) {
        if(chargeEService.updateById(chargeE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }
}
