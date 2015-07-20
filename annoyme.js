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
		
		$("img").each(function(){
			if(self.shouldIRun())
				$(this).attr("src", "http://media.giphy.com/media/MfIGtdhq6Q9aM/giphy.gif");
		});
    }
}    

$(document).ready(function(){
    var annoyances = [new RickRoll(CHANCE.LOW)];
    annoyances.forEach(function(current){
        if(current instanceof Annoyance) {
            current.run();
        }
    });
});
}());