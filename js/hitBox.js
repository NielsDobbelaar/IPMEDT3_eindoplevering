    AFRAME.registerComponent("hitbox", {
        init:  function() {
            var t = this.el;
            //veranderd van kleur als hij een event krijgt van de note
            this.hitHandler = function(event){
               t.setAttribute("color" , "lime");
               t.setAttribute("opacity" , "0.5");
               setTimeout(() => {
                t.setAttribute("color", "black");
                t.setAttribute("opacity" , "0.1");
            }, 150);
            }
            this.missHandler = function(event){
                t.setAttribute("color" , "red");
                t.setAttribute("opacity" , "0.5");
                setTimeout(() => {
                 t.setAttribute("color", "black");
                 t.setAttribute("opacity" , "0.1");
             }, 150);
             }
             this.el.addEventListener("blockHit",this.hitHandler);
            this.el.addEventListener("blockMiss",this.missHandler);
        },
        update: function() {},
        tick: function() {},
        remove: function() {},
        pause: function() {},
        play: function() {}
      });
      