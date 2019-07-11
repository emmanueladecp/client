package com.sales.client;

import com.sales.client.entities.Form;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class ClientApplication {
    
    public static void main(String[] args) {
            SpringApplication.run(ClientApplication.class, args);
    }

   
    
}
