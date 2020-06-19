package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.BuildEDto;
import com.xiong.graduate.entity.BuildE;
import com.xiong.graduate.mapper.BuildEMapper;
import com.xiong.graduate.service.BuildEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildEServiceImpl extends ServiceImpl<BuildEMapper, BuildE> implements BuildEService {

    @Autowired
    private BuildEService buildEService;

    @Override
    public MyPage<List> queryBuild(Integer currentPage, Integer pageSize, String buildAddress) {

        QueryWrapper<BuildE> buildEQueryWrapper = new QueryWrapper<>();
        if(buildAddress!=null) {
            buildEQueryWrapper.like("build_address", buildAddress);
        }

        Page<BuildE> buildEPage=new Page<>(currentPage,pageSize);
        IPage<BuildE> iPage=buildEService.page(buildEPage,buildEQueryWrapper);
        List<BuildE> buildEList=iPage.getRecords();//获取所有记录

        ModelMapper modelMapper =new ModelMapper();
        List<BuildEDto> roomEDtoList =modelMapper.map(buildEList,new TypeToken<List<BuildEDto>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(roomEDtoList,total);
    }

    @Override
    public AllResult<BuildE> addBuild(BuildE buildE) {
        buildEService.save(buildE);
        return new AllResult<BuildE>(200,"添加成功");
    }

    @Override
    public AllResult<BuildE> editBuild(BuildE buildE) {
        if(buildEService.updateById(buildE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }
}
