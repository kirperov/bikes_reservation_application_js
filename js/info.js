function Timer(sec, min) {
    this.secondes = sec;
    this.minutes = min;
    this.getTimer();
    
    }
        Timer.prototype.getTimer = function(){
            var that = this;
            var myVar = setInterval(startTimer, 1000);
    
            function startTimer() {
                document.getElementById("timer").innerHTML = that.minutes + " min " + " " + that.secondes + " sec";
                that.secondes--;
        
                if (that.secondes == 00) {
                    that.minutes--;
                    that.secondes = 59;
                }
        
                if (that.minutes == 5 && that.seconds == 1) {
                    document.getElementById("alertReserv").innerHTML = "Villez déposer votre vélo avant la fin de la réservation";
                }
    
                if (that.minutes <= -1) {
                    document.getElementById("timer").innerHTML = " Vous avez dépasées le temps de la réservation";
                    document.getElementById("velos").innerHTML = parseInt(document.getElementById("velos").textContent) +1;
                    document.getElementById("places").textContent = parseInt(document.getElementById("places").textContent) -1;


                    document.getElementById("alertReserv").style.display = "none";
                    document.getElementById("btnCancel").style.display = "none";
                    document.getElementById("messageAfterReserve").textContent = "Votre réservation est expiré";
                    document.getElementById("infoClient").style.display = "block";
                    clearInterval(myVar);
                }   
            }
    
        startTimer();
        function stopTimer() {
        document.getElementById("btnCancel").addEventListener("click", function() {
            clearInterval(myVar);
         });
        }
        stopTimer();
    } 
    
    
    function initTimer() {
        var second = 59;
        var minute = 19;
        new Timer(second, minute);
    }

