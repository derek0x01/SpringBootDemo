package com.xiong.graduate.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiong.graduate.common.page.MyPage;
import com.xiong.graduate.common.result.AllResult;
import com.xiong.graduate.dto.BuildEDto;
import com.xiong.graduate.dto.CustomerDTO;
import com.xiong.graduate.entity.BuildE;
import com.xiong.graduate.entity.CustomerE;
import com.xiong.graduate.mapper.CustomerEMapper;
import com.xiong.graduate.service.CustomerEService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerEServiceImpl extends ServiceImpl<CustomerEMapper, CustomerE> implements CustomerEService {

    @Autowired
    private CustomerEService customerEService;

    @Override
    public MyPage<List> queryCustomer(Integer currentPage, Integer pageSize, String customerName) {
        QueryWrapper<CustomerE> customerEQueryWrapper = new QueryWrapper<>();
        if(customerName!=null) {
            customerEQueryWrapper.like("customer_name", customerName);
        }

        Page<CustomerE> customerEPage=new Page<>(currentPage,pageSize);
        IPage<CustomerE> iPage=customerEService.page(customerEPage,customerEQueryWrapper);
        List<CustomerE> customerEList=iPage.getRecords();//获取所有记录

        ModelMapper modelMapper =new ModelMapper();
        List<CustomerDTO> customerDTOS =modelMapper.map(customerEList,new TypeToken<List<CustomerDTO>>(){}.getType());
        long total = iPage.getTotal();
        return new MyPage<>(customerDTOS,total);
    }

    @Override
    public AllResult<CustomerE> addCustomer(CustomerE customerE) {
        customerEService.save(customerE);
        return new AllResult<>(200,"添加成功");
    }

    @Override
    public AllResult<CustomerE> editCustomer(CustomerE customerE) {
        if(customerEService.updateById(customerE)){
            return new AllResult<>(200,"修改成功");
        }
        return new AllResult<>(500,"修改失败");
    }
}
