// Je crée un objet icône pour representer la station
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
    parking: {
        icon: iconBase + 'parking_lot_maps.png'
    },
};


var marker = {

    marker: null,
    stations: null,
    reservStation: null,
    // crée marker
init: function () {
    //recuperer les données de l'api JCDecaux
    getAjax("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=7e0dc8471aa2671de3ffeabf20a68b4e285f3f83", function (reponse) {
        // Transforme la réponse en tableau d'objets JavaScript
        this.stations = JSON.parse(reponse);
        //Boucle pour ajouter les markers
        this.stations.forEach(dataStation => {
            var currentStation = Object.create(station);
            currentStation.initStation(dataStation);

            this.marker = new google.maps.Marker({
                title: currentStation.nom,
                address: currentStation.address,
                places: currentStation.places,
                velos: currentStation.velos,
                position: currentStation.position,
                map: map,
                icon: icons[station.type].icon,
            })

            this.marker.addListener('click', function () {
                document.getElementById("blockReservation").style.display = "block";
                document.getElementById("beforeReservation").style.display = "none";
                document.getElementById("velos").textContent = station.velos;
                this.reservStation = Object.create(reservation);
                this.reservStation.initRes(currentStation);
            });
        });
    });
}

}

var createMarker = Object.create(marker);
createMarker.init();