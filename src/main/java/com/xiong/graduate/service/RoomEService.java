package com.xiong.graduate.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.RoomEDto;
import com.xiong.graduate.entity.RoomE;

import java.util.List;

public interface RoomEService extends IService<RoomE> {
    MyPage<List> queryRoom(Integer currentPage, Integer pageSize,String number);
    //MyPage<List> queryRoomByWrapper(Integer currentPage, Integer pageSize,String number);
    AllResult<RoomE> addRoom(RoomE roomE);
    AllResult<RoomE> editRoom(RoomE roomE);
}
