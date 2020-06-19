package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.CleanDTO;
import com.xiong.graduate.dto.RepairDTO;
import com.xiong.graduate.entity.CleanE;
import com.xiong.graduate.entity.RepairE;
import com.xiong.graduate.mapper.CleanEMapper;
import com.xiong.graduate.service.CleanEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CleanEServiceImpl extends ServiceImpl<CleanEMapper, CleanE> implements CleanEService {

    @Autowired
    private CleanEService cleanEService;

    @Override
    public MyPage<List> queryClean(Integer currentPage, Integer pageSize, String cleanManager) {
        QueryWrapper<CleanE> cleanEQueryWrapper = new QueryWrapper<>();
        if(cleanManager!=null) {
            cleanEQueryWrapper.like("clean_manager", cleanManager);
        }

        Page<CleanE> cleanEPage=new Page<>(currentPage,pageSize);
        IPage<CleanE> iPage=cleanEService.page(cleanEPage,cleanEQueryWrapper);
        List<CleanE> cleanEList=iPage.getRecords();//获取所有记录

        ModelMapper modelMapper =new ModelMapper();
        List<CleanDTO> cleanDTOList =modelMapper.map(cleanEList,new TypeToken<List<CleanDTO>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(cleanDTOList,total);
    }

    @Override
    public AllResult<CleanE> addClean(CleanE cleanE) {
        cleanEService.save(cleanE);
        return new AllResult<>(200,"添加成功");
    }

    @Override
    public AllResult<CleanE> editClean(CleanE cleanE) {
        if(cleanEService.updateById(cleanE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }
}
