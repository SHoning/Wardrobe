package com.capgemini.Wardrobe.controller;

import com.capgemini.Wardrobe.model.Wardrobe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/log")
public class WardrobeController {
    private Wardrobe wardrobe;

    @GetMapping
    public void registerWardrobe(@PathVariable String name){
        wardrobe = new Wardrobe(name);
    }

    @GetMapping
    public void open(){
        if (wardrobe.isOpen()== false) {
            wardrobe.setOpen(true);
        }
    }

    @GetMapping
    public void close(){
        if(wardrobe.isOpen()==true){
            wardrobe.setOpen(false);
        }
    }

    @GetMapping
    public void getInside(){
        if(wardrobe.isAmInside()==false){
            wardrobe.setAmInside(true);
        }
    }

    @GetMapping
    public void getOut(){
        if(wardrobe.isAmInside()==true){
            wardrobe.setAmInside(false);
        }
    }

    @GetMapping
    public void kick(int Force){
        if(wardrobe.getBreakDownCapacity() >= Force){
            wardrobe.setWorking(false);
        }
    }
}
