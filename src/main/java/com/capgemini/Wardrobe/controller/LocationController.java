package com.capgemini.Wardrobe.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/location")
public class LocationController {
    private int timesVisited;

    @GetMapping("/")
    public boolean inNarnia(){      //You have a 20% chance to get into Narnia
        if (Math.random()<=0.2) {
            timesVisited++;
           return true;
        }
        return false;
    }

    @GetMapping("/fight")
    public boolean killWitch(){
        if (Math.random()>= timesVisited/10){
            return true;
        }
        return false;
    }
}
