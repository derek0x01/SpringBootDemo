package com.xiong.graduate.controller;

import com.baomidou.mybatisplus.extension.api.R;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.RoomEDto;
import com.xiong.graduate.entity.RoomE;
import com.xiong.graduate.service.RoomEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomEController {

    @Autowired
    private RoomEService roomEService;

    @GetMapping("/queryRoom")
    private MyPage<List> queryRoom(@RequestParam(name = "currentPage", defaultValue = "1")Integer currentPage,
                                   @RequestParam(name = "pageSize", defaultValue = "20") Integer pageSize,
                                   @RequestParam(name = "number", required = false) String number){
        return roomEService.queryRoom(currentPage, pageSize,number);
    }

//    @GetMapping("/findRoom")
//    private MyPage<List> findRoom(@RequestParam(defaultValue = "1")Integer currentPage, @RequestParam(defaultValue = "20") Integer pageSize,@RequestParam String number){
//        return null;//roomEService.queryRoomByWrapper(currentPage, pageSize,number);
//    }

    @RequestMapping("/addRoom")
    private AllResult<RoomE> addRoom(@RequestBody RoomE roomE){
        return roomEService.addRoom(roomE);
    }

    @RequestMapping("/getRoomById")
    private RoomE getRoomById(@RequestParam(name = "id")Integer id){
        return roomEService.getById(id);
    }

    @RequestMapping("/editRoom")
    private AllResult<RoomE> editRoom(@RequestBody RoomE roomE){
        return roomEService.editRoom(roomE);
    }

    @RequestMapping("/removeRoomById")
    private Boolean delete(@RequestParam(name = "id")Integer id){ return roomEService.removeById(id);}

}
