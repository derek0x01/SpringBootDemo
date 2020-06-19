package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.RepairDTO;
import com.xiong.graduate.entity.RepairE;
import com.xiong.graduate.mapper.RepairEMapper;
import com.xiong.graduate.service.RepairEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepairEServiceImpl extends ServiceImpl<RepairEMapper, RepairE> implements RepairEService {

    @Autowired
    private RepairEService repairEService;

    @Override
    public MyPage<List> queryRepair(Integer currentPage, Integer pageSize, String repairNumber) {
        QueryWrapper<RepairE> deviceEQueryWrapper = new QueryWrapper<>();
        if(repairNumber!=null) {
            deviceEQueryWrapper.like("repair_number", repairNumber);
        }

        Page<RepairE> repairEPage=new Page<>(currentPage,pageSize);
        IPage<RepairE> iPage=repairEService.page(repairEPage,deviceEQueryWrapper);
        List<RepairE> repairEList=iPage.getRecords();//获取所有记录

        ModelMapper modelMapper =new ModelMapper();
        List<RepairDTO> repairDTOList =modelMapper.map(repairEList,new TypeToken<List<RepairDTO>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(repairDTOList,total);
    }

    @Override
    public AllResult<RepairE> addRepair(RepairE repairE) {
        repairEService.save(repairE);
        return new AllResult<>(200,"添加成功");
    }

    @Override
    public AllResult<RepairE> editRepair(RepairE repairE) {
        if(repairEService.updateById(repairE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }
}
