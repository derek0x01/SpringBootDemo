package com.xiong.graduate;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;


@SpringBootApplication
@MapperScan("com.xiong.graduate.mapper")
public class GraduateApplication {

	public static void main(String[] args) {
		SpringApplication.run(GraduateApplication.class, args);
	}

	@Bean
	public WebServerFactoryCustomizer<ConfigurableWebServerFactory> webServerFactoryCustomizer(){
		return factory -> {
			ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/");
			factory.addErrorPages(error404Page);
		};
	}


}
