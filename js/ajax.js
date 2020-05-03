function getAjax(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.responseText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur du résau avec l'URL" + url);
    });
    req.send(null);
}
 
 