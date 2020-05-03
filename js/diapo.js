    function Diapo(arrayPictures, arrayTitle, arrayText, path, container, index, time) {
        this.ArrPic = arrayPictures;
        this.ArrTitle = arrayTitle;
        this.ArrText = arrayText;
        this.Repertoire = path;
        this.Container = container;
        this.Index = index;
        this.time_diapo=time;
    
        this.createDiapo();
        this.timer();
    }
    
    Diapo.prototype.createDiapo = function() {
        that = this;
        that.Picture = document.createElement("img");
        that.Picture.style.height="100%";
        that.Picture.style.width="100%";
    
        that.TitleDiap = document.createElement("h3");
        that.TextDiap = document.createElement("p");
    
        that.Container.appendChild(that.Picture);
        document.getElementById("containerInfoDiapo").appendChild(that.TitleDiap);
        document.getElementById("containerInfoDiapo").appendChild(that.TextDiap);
        that.Picture.src=that.Repertoire + that.ArrPic[that.Index] + '.PNG';
        that.TitleDiap.textContent = that.ArrTitle[that.Index];
        that.TextDiap.textContent = that.ArrText[that.Index];
        this.right();
        this.left();
    };
    
    Diapo.prototype.right = function() {
        this.btnRight = document.getElementById("slideRight");
        this.btnRight.addEventListener("click", function(){
            if(that.Index >= that.ArrPic.length-1){
                that.Index = 0;
            } else {
                that.Index++;
            }
            that.Picture.src=that.Repertoire + that.ArrPic[that.Index] + '.PNG';
            that.TitleDiap.textContent = that.ArrTitle[that.Index];
            that.TextDiap.textContent = that.ArrText[that.Index];
        });

        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 39) {
                if(that.Index >= that.ArrPic.length-1){
                    that.Index = 0;
                } else {
                    that.Index++;
                }
                that.Picture.src=that.Repertoire + that.ArrPic[that.Index] + '.PNG';
                that.TitleDiap.textContent = that.ArrTitle[that.Index];
                that.TextDiap.textContent = that.ArrText[that.Index];
            }
        });
    
    }
    
    Diapo.prototype.left = function() {
        this.btnLeft = document.getElementById("slideLeft");
        this.btnLeft.addEventListener("click", function(){
            if(that.Index <= 0){
                that.Index = that.ArrPic.length-1;
            } else{
                that.Index--;
            }
            that.Picture.src=that.Repertoire + that.ArrPic[that.Index] + '.PNG';
            that.TitleDiap.textContent = that.ArrTitle[that.Index];
            that.TextDiap.textContent = that.ArrText[that.Index];
        });
    }
    
        
    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 37) {
            if(that.Index <= 0){
                that.Index = that.ArrPic.length-1;
            } else{
                that.Index--;
            }
            that.Picture.src=that.Repertoire + that.ArrPic[that.Index] + '.PNG';
            that.TitleDiap.textContent = that.ArrTitle[that.Index];
            that.TextDiap.textContent = that.ArrText[that.Index];
        } 
    });
    
    Diapo.prototype.timer = function() {
        function nextSlide() {
                if(that.Index < that.ArrPic.length-1){
                    that.Index ++;
                    that.Picture.src=that.Repertoire + that.ArrPic[that.Index] + '.PNG';
                    that.TitleDiap.textContent = that.ArrTitle[that.Index];
                    that.TextDiap.textContent = that.ArrText[that.Index];
                } else {
                    that.Index=-1;
                }
            }
                that.intervalDiapo = setInterval(nextSlide, that.time_diapo);
                this.btnStop = document.getElementById("btnStop");
                this.btnStart = document.getElementById("btnStart");
    
                this.btnStop.addEventListener('click', function() {
                clearInterval(that.intervalDiapo);
                that.btnStop.style.display = "none";
                that.btnStart.style.display = "block";
        });
        
                that.btnStart.style.display = "none";
                this.btnStart.addEventListener('click', function() {
                nextSlide();
                that.intervalDiapo = setInterval(nextSlide, that.time_diapo);
                that.btnStart.style.display = "none";
                that.btnStop.style.display = "block";
            });
    }
    
    
    function initDiapo(){
        myPictures = ["image1", "image2", "image3"];
        tab_title_diapo = [" 1 Choisissez votre station", " 2 Réservez", " 3 S'informer"];
    
        tab_text_diapo = ["Disponible 24h/24 et 7j/7, Vélo'v vous accompagne à chaque instant",
                        "Dans le panneau 'Détails de la station' cliquer sur 'Réserver' afin d'effectuer une signature",
                        "Dans le panneau d'information vous avez les détails de votre réservation comme l'adresse et temps restant"];
    
        var pathFolder = "img/"
        var diapoContainer = document.getElementById("caroussel");
        var myIndex = 0;
        new Diapo(myPictures, tab_title_diapo, tab_text_diapo, pathFolder, diapoContainer, myIndex, 3000);
    }

    initDiapo();
    