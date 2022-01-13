AFRAME.registerComponent("note", {
    init:  function() {
       
        this.missed = false;
        var t = this.el;
        this.hitHandler = function(event){
            const hitBox = document.getElementById("js--hitBox");
            const hitEvent = new Event('blockHit');
            const missEvent = new Event('blockMiss');
            
            if(t.getAttribute("position").z < -3.8 && t.getAttribute("position").z > -5.2){
                hitBox.dispatchEvent(hitEvent);
            }else{
                hitBox.dispatchEvent(missEvent);
                t.missed = true;
            }
        }
        this.el.addEventListener("mouseenter",this.hitHandler);
    },
    update: function() {},
    tick: function() {
        const moveSpeed = -0.1;
        const opacitySpeed = 0.05;

        const pos = this.el.getAttribute("position");
        var newpos = pos.x + " " + pos.y + " " + (pos.z-moveSpeed);
        this.el.setAttribute("position", newpos);
       
        if(this.el.getAttribute("position").z > -3 || this.el.missed){
            if(this.el.getAttribute("material").opacity > 0){
                var newOpacity =  + this.el.getAttribute("material").opacity-opacitySpeed;
                this.el.setAttribute("material", " color: red; shader: flat; opacity: "+newOpacity);
            }else{
                this.el.parentNode.removeChild(this.el);
            }
        }
    
    },
    remove: function() {},
    pause: function() {},
    play: function() {}
  });
  