"use strict";
(function() {
var CHANCE = Object.freeze({
    LOW: 0.05,
    MEDIUM: 0.15,
    HIGH: 0.3,
    VERY_HIGH: 0.5,
    OBVIOUS: 1
});

class Annoyance {
    constructor(chanceLevel) {
        this.chanceLevel = chanceLevel;
    }
    
    run() {
        if(this.shouldIRun())
            console.log("I run like the wind.");
    }
    
    shouldIRun() {        
        return (Math.random() <= this.chanceLevel);
    }
}

class RickRoll extends Annoyance {
    run() {
        var self = this;
        $("a").each(function(){
            if(self.shouldIRun())
                $(this).attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        });
    }
}

class TrollRoll extends Annoyance {
    run() {
        var self = this;
        if(self.shouldIRun())
            $("img").each(function(){
                $(this).attr("src", "http://media.giphy.com/media/MfIGtdhq6Q9aM/giphy.gif");
            });
    }
}    

/*
* ChickenWing Song
*/
class ChickenWing extends Annoyance {
    run(){
        if(self.shouldIRun()) {
            var chicken = '<iframe style="display: none" width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/216245327&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';
            $( "body" ).prepend(chicken);
        }
    }
}

$(document).ready(function(){
    var annoyances = [new RickRoll(CHANCE.LOW), new TrollRoll(CHANCE.LOW), new ChickenWing(CHANCE.LOW)];
    annoyances.forEach(function(current){
        if(current instanceof Annoyance) {
            current.run();
        }
    });
});
}());