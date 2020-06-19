package com.xiong.graduate.common.page;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MyPage<T> {
    private T data;
    private long total;

    public MyPage(T data, long total) {
        this.data = data;
        this.total = total;
    }
}
