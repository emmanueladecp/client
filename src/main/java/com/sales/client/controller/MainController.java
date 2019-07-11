/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sales.client.controller;

/**
 *
 * @author ADMIN
 */
import com.sales.client.entities.Form;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@Controller
public class MainController {
    
        
    @GetMapping({"/", "/index"})
    public String submitForm(Model model) {
        //model.addAttribute("form", service.findAll());
        model.addAttribute("newForm", new Form());
        return "index";
    }
    
    @PostMapping("/")
    public String submitOrder(@Valid @ModelAttribute("newForm") Form newForm){
        final String uri = "http://localhost:8080/api/v1/orders";
        
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.postForObject( uri, newForm, Form.class);
        
        return "redirect:/";
    }
}
