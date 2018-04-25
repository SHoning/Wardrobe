package com.capgemini.Wardrobe.model;

public class Wardrobe {
    private String name;
    private boolean open;
    private boolean amInside;
    private double breakDownCapacity;
    private boolean working=true;

    public Wardrobe() {
    }

    public Wardrobe(String name) {
        this.name = name;
        this.working = true;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isOpen() {
        return open;
    }

    public void setOpen(boolean open) {
        this.open = open;
    }

    public boolean isAmInside() {
        return amInside;
    }

    public void setAmInside(boolean amInside) {
        this.amInside = amInside;
    }

    public double getBreakDownCapacity() {
        return Math.random()*100;
    }

    public void setBreakDownCapacity(int breakDownCapacity) {
        this.breakDownCapacity = breakDownCapacity;
    }

    public boolean isWorking() {
        return working;
    }

    public void setWorking(boolean working) {
        this.working = working;
    }
}

