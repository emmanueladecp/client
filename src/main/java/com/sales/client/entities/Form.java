/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sales.client.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Data;

/**
 *
 * @author ADMIN
 */
@Setter
@Getter
@NoArgsConstructor
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Form {
    private String custid;
    private String custname;
    private String custphone;
    private String custemail;
    private String custidhidden;
    
    
    private String movieid;
    private String moviename;
    private String movietime;
    private Integer moviebuy;
    private String movieidhidden;
    private Integer moviestockhidden;
    
}
