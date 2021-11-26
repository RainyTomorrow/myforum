package com.evan.wj.error;


import org.springframework.boot.web.server.ErrorPageRegistrar;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.ErrorPageRegistry;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

//[前后端未分离的情况下404页面]，其实也就是访问后端的端口号的url，但是不存在对应的controller的时候
@Component
public class ErrorConfig implements ErrorPageRegistrar {

    @Override
    public void registerErrorPages(ErrorPageRegistry registry) {
        //404页面，注意是单页面应用，也就是说所以所有的页面都是渲染在index.html之上的
        //将访问的页面的网址对应到vue的对应的路由
        //index.html是个空白的页面，当访问的页面不存在的时候，就将会显示html.index页面
        ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/index.html");
        registry.addErrorPages(error404Page);
    }

}

