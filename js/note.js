AFRAME.registerComponent("note", {
    init:  function() {
       
        this.hit = false;
        this.missed = false;
        var t = this.el;
        this.hitHandler = function(event){
            if(t.hit || t.missed){
                return;
            }
            //hit handler als er een noot wordt geraakt
            const hitBox = document.getElementById("js--hitBox");
            const hitEvent = new Event('blockHit');
            const missEvent = new Event('blockMiss');
            
            if(t.getAttribute("position").z < -3.6 && t.getAttribute("position").z > -5.4){
                hitBox.dispatchEvent(hitEvent);
                t.hit = true;
            }else{
                hitBox.dispatchEvent(missEvent);
                t.missed = true;
            }
        }
        this.el.addEventListener("mouseenter",this.hitHandler);
    },
    update: function() {},
    tick: function() {
        //de loop funcite die de noot beweegt en weghaalt wanneer hij gemist is 
        const moveSpeed = -0.05;


        const pos = this.el.getAttribute("position");
        var newpos = pos.x + " " + pos.y + " " + (pos.z-moveSpeed);
        this.el.setAttribute("position", newpos);
       
        if(this.el.getAttribute("position").z > -1 || this.el.missed){
                this.el.parentNode.removeChild(this.el);
        }
    
    },
    remove: function() {},
    pause: function() {},
    play: function() {}
  });
  