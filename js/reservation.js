


// L'objet qui crée la réservations
var reservation = {
    initRes: function (station) {
        document.getElementById("nameStation").textContent = station.nom;
        document.getElementById("adrs").innerHTML = station.address;
        document.getElementById("places").innerHTML = station.places;

       var nbreVelos = station.velos;
       document.getElementById("velos").innerHTML = station.velos;
        if(nbreVelos > 0) {
            document.getElementById("btnConfirm").style.display = "block";      
        

        } if( document.getElementById("btnCancel").style.display == "block") { 
            document.getElementById("btnConfirm").style.display = "none";               
        } else if(nbreVelos == 0) {
            document.getElementById("velos").innerHTML = " Pas de vélos disponibles";
            document.getElementById("btnConfirm").style.display = "none";    
        }
    },

    
    // Bouton de confirmation de la signature
    initBtnConfirmation: function() {
        var btnConfirm = document.createElement("button");
        // Button trigger modal 
        btnConfirm.setAttribute("data-toggle", "modal");
        btnConfirm.setAttribute("data-target", "#modalSignature");
        var reservFormGetConf = document.getElementById('reservationForm');
        btnConfirm.id= "btnConfirm";
        btnConfirm.classList ="btn btn-warning";
        btnConfirm.textContent="Confirmer votre réservation";
        reservFormGetConf.appendChild(btnConfirm);
        btnConfirm.addEventListener('click', function(e) {
        btnConfirm.style.display ="none";
        e.preventDefault();
        });
    },

        // bouton reservation 
    initBtnReservation: function() {
        var btnReserve = document.getElementById("btnContinueRes");
        document.getElementById("containerCanvas").style.display = "none";

         btnReserve.addEventListener("click", function(e) {
           
            if(document.getElementById("nom").value == "" || document.getElementById("prenom").value == "") {
            } else { 
                var nameStation = document.getElementById("nameStation").textContent;
                document.getElementsByClassName("name")[0].innerHTML = nameStation;
                document.getElementById("messageAfterReserve").style.display = "block";
                document.getElementById("cardInfo").style.display = "block";
                document.getElementById("cardBodyInfo").style.display="block";
                document.getElementById("infoReservCurrent").style.display="block";
                document.getElementById("infoClient").style.display = "none";
                document.getElementById("btnCancel").style.display ="block";
                document.getElementById("btnContinueRes").style.display = "none";               
                document.getElementById("messageReserveCancel").style.display = "none";
                initTimer();
                document.getElementById("places").textContent = parseInt(document.getElementById("places").textContent) +1;
                document.getElementById("velos").textContent = document.getElementById("velos").textContent -1;
            }

            // La partie local storage qui enregistre en mémoire la réservation
            var lastName = document.getElementById('nom').value;
            var name = document.getElementById('prenom').value;

        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("lastname", lastName);
            localStorage.setItem("name", name);
            sessionStorage.setItem("namestation" , nameStation);
            var userLastname = localStorage.getItem("lastname");  
            var userName = localStorage.getItem("name");  
            var stationNameStorage = sessionStorage.getItem("namestation");
            document.getElementById("nom").value = userName;
            document.getElementById("prenom").value = userLastname;


            // Je rajoute le nom et prenom de local storage dans l'information pour afficher 
            document.getElementById("infoNameUser").textContent = localStorage.getItem("name") + " ";
            document.getElementById("infoLastNameUser").textContent = localStorage.getItem("lastname") + " ,";
            // J'affiche le message de réservation à partir le local storage (nom, prenom et nom de la station)
            messageAfterReserve.textContent = "Merci pour votre réservation " + userLastname + " " + userName +  " !";
            document.getElementsByClassName("name")[0].textContent = stationNameStorage;
          } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
          }
          e.preventDefault();
        });
    },

    initBtnCanel: function() {
    // bouton Annulation Réservation 
        var btnCancel = document.getElementById("btnCancel");
        var reservCardBody = document.getElementById('reservCardBody');
        reservCardBody.appendChild(btnCancel);
        
        var btnAnnulation = document.getElementById("btnCancel");
        btnAnnulation.addEventListener("click", function () {
            document.getElementsByClassName("info")[0].style.display = "none";
            var nameStation = document.getElementsByClassName("name")[0].textContent;
            document.getElementsByClassName("name")[0].innerHTML = nameStation;
            document.getElementById("messageAfterReserve").style.display = "none";
            document.getElementById("cardInfo").style.display = "none";
            document.getElementById("infoClient").style.display = "block";
            document.getElementById("containerCanvas").style.display = "none";
            btnAnnulation.style.display = "none";
            document.getElementById("messageReserveCancel").style.display = "block";
             document.getElementById("velos").innerHTML = parseInt(document.getElementById("velos").textContent) +1;
             document.getElementById("places").textContent = parseInt(document.getElementById("places").textContent) -1;
             
        });
    }
}


   var showReserv = Object.create(reservation);
   showReserv.initBtnConfirmation(); 
   showReserv.initBtnReservation();
   showReserv.initBtnCanel();