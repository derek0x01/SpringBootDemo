package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.RoomEDto;
import com.xiong.graduate.entity.RoomE;
import com.xiong.graduate.mapper.RoomEMapper;
import com.xiong.graduate.service.RoomEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomEServiceImpl extends ServiceImpl<RoomEMapper, RoomE> implements RoomEService {

    @Autowired
    private RoomEService roomEService;

    @Override
    public MyPage<List> queryRoom(Integer currentPage, Integer pageSize,String number) {
        //RoomEDto dto=new RoomEDto();
        QueryWrapper<RoomE> roomEQueryWrapper = new QueryWrapper<>();
        if(number!=null) {
            roomEQueryWrapper.like("number", number);
        }

        Page<RoomE> room=new Page<>(currentPage,pageSize);
        IPage<RoomE> iPage=roomEService.page(room,roomEQueryWrapper);
        List<RoomE> roomEList=iPage.getRecords();//获取所有记录

        ModelMapper modelMapper =new ModelMapper();
        List<RoomEDto> roomEDtoList =modelMapper.map(roomEList,new TypeToken<List<RoomEDto>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(roomEDtoList,total);
    }

    @Override
    public AllResult<RoomE> addRoom(RoomE roomE) {
//        QueryWrapper<RoomE> queryWrapper =new QueryWrapper<>();
//        queryWrapper.eq("number",roomE.getNumber());
//        if(roomEService.count(queryWrapper)!=0){
//            return new AllResult<RoomE>(500,"已有此房间，请检查信息");
//        }else {
            roomEService.save(roomE);
            return new AllResult<RoomE>(200,"添加成功");
//        }
    }

    @Override
    public AllResult<RoomE> editRoom(RoomE roomE) {
        if(roomEService.updateById(roomE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }


//    @Override
//    public MyPage<List> queryRoomByWrapper(Integer currentPage, Integer pageSize, String number) {
//        QueryWrapper<RoomE> roomEQueryWrapper = new QueryWrapper<>();
//        if(number!=null) {
//            roomEQueryWrapper.like("number", number);
//        }
//
//        IPage<RoomE> page=new Page<>(currentPage,pageSize);
//        IPage<RoomE> roomEIpage =roomEService.page(page,roomEQueryWrapper);
//        List<RoomE> roomEList=roomEIpage.getRecords();
//
//        ModelMapper modelMapper=new ModelMapper();
//        List<RoomEDto> roomEDto=modelMapper.map(roomEList,new TypeToken<List<RoomEDto>>(){}.getType());
//        return new MyPage<>(roomEDto,roomEIpage.getTotal());
//    }

}
