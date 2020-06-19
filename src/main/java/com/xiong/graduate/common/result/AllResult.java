package com.xiong.graduate.common.result;

import lombok.Data;

@Data
public class AllResult<T> {
    private T data;
    private Integer code;
    private String msg;

    public AllResult(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public AllResult(T data, Integer code, String msg) {
        this.data = data;
        this.code = code;
        this.msg = msg;
    }


}
