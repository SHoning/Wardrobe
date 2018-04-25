package com.capgemini.Wardrobe.controller;

import com.capgemini.Wardrobe.model.Wardrobe;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/log")
public class WardrobeController {
    private Wardrobe wardrobe;

    @PostMapping("/new")
    public void registerWardrobe(Wardrobe namedWardrobe){
        wardrobe = namedWardrobe;
    }

    @GetMapping("/open")
    public void open(){
        if (wardrobe.isOpen()== false) {
            wardrobe.setOpen(true);
        }
    }

    @GetMapping("/close")
    public void close(){
        if(wardrobe.isOpen()==true){
            wardrobe.setOpen(false);
        }
    }

    @GetMapping("/goIn")
    public void getInside(){
        if(wardrobe.isAmInside()==false){
            wardrobe.setAmInside(true);
        }
    }

    @GetMapping("/getOut")
    public void getOut(){
        if(wardrobe.isAmInside()==true){
            wardrobe.setAmInside(false);
        }
    }

    @GetMapping("/kick")
    public void kick(int Force){
        if(wardrobe.getBreakDownCapacity() >= Force){
            wardrobe.setWorking(false);
        }
    }

    @GetMapping("/")
    public Wardrobe getStatus(){
        return this.wardrobe;
    }

}
