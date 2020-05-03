var station = {
    nom: "",
    address: "",
    places: 0,
    velos: 0,
    position: Object,
    type: 'parking',


    initStation: function (data) {
        this.nom = data.name;
        this.address = data.address;
        this.places = data.available_bike_stands;
        this.velos = data.available_bikes;
        this.position = data.position;
        this.type = data.type;
    }
}
