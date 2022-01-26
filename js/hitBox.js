    AFRAME.registerComponent("hitbox", {
        init: function () {
            var t = this;
            //veranderd van kleur als hij een event krijgt van de note


            this.updateScore = function (event) {
                score++;
                var scoreText = document.getElementById("js--score-text");
                scoreText.setAttribute("text", "value: score : " + score + "; color:white; align:center; wrapCount:25");
            }

            this.hitHandler = function (event) {
                t.el.setAttribute("color", "lime");
                t.el.setAttribute("opacity", "0.5");
                hitsound.components.sound.playSound();
                t.updateScore();
                setTimeout(() => {
                    t.el.setAttribute("color", "white");
                    t.el.setAttribute("opacity", "0.1");
                    hitsound.components.sound.stopSound();
                }, 150);
            }


            this.missHandler = function (event) {
                t.el.setAttribute("color", "red");
                t.el.setAttribute("opacity", "0.5");
                setTimeout(() => {
                    t.el.setAttribute("color", "white");
                    t.el.setAttribute("opacity", "0.1");
                }, 150);
            }
            this.el.addEventListener("blockHit", this.hitHandler);
            this.el.addEventListener("blockMiss", this.missHandler);
        },
        update: function () {},
        tick: function () {},
        remove: function () {},
        pause: function () {},
        play: function () {}
    });