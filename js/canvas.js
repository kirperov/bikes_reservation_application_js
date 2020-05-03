var container = document.getElementById("contentModal");
var canvas = document.getElementById("drawSign");


container.appendChild(canvas);
function Signature(container, canvas, linejoin, linecap, line, color) {
    this.container = container;
    this.moncanvas = canvas;
    this.context = this.moncanvas.getContext('2d');

    this.context.lineJoin = linejoin;
    this.context.lineCap = linecap;
    this.context.lineWidth = line;
    this.context.strokeStyle = color;
    this.ecrire = false;
    var that = this;

    this.moncanvas.addEventListener("mousedown", function(e) {
        that.context.beginPath();
        that.context.moveTo(e.offsetX , e.offsetY);
        that.prevX = e.offsetX;
        that.prevY = e.offsetY;
        that.ecrire = true;
        document.getElementById("btnContinueRes").style.display = "block";

     });
    this.moncanvas.addEventListener("mouseup", function(e) {
		    that.ecrire = false;
        that.context.closePath();
     });

     this.moncanvas.addEventListener("mousemove", function(e) {
        if(that.ecrire){
            this.x = e.offsetX;
            this.y = e.offsetY;
            that.context.quadraticCurveTo(this.x, this.y, this.x, this.y);
            that.context.stroke();
            that.context.moveTo(this.x,this.y);
            // that.prevX = this.x;
            // that.prevY = this.y;
        }
 })
}

Signature.prototype.initBtnClear = function() {
    var that=this;
    var btnClear = document.getElementById("btnClear");
    btnClear.addEventListener('click', function() {
        that.context.clearRect(0, 0, canvas.width, canvas.height);
        that.prevX = null;
        that.prevY = null;
        document.getElementById("btnContinueRes").style.display = "none";
    }); 
}

Signature.prototype.initBtnContinue = function() {
    var that = this;
    document.getElementById("btnContinueRes").style.display = "none";

    var btnContinueSign = document.getElementById("btnContinueRes");
    btnContinueSign.addEventListener("click", function() {
        if(document.getElementById("velos").textContent == 0) {
            document.getElementById("btnReserve").style.display = "none";      
        } if(that.prevX == null && that.prevY == null) {
            document.getElementById("btnContinueRes").style.display = "none";
        }
    });
}

Signature.prototype.clearSignbtn = function() {
    var that = this;
    document.getElementById("btnCancel").addEventListener("click", function() {
        that.context.clearRect(0, 0, canvas.width, canvas.height);
    });
}



var monCanvas = new Signature(container, canvas, 'round', 'round', "1.5",'blue');
monCanvas.initBtnClear();
monCanvas.initBtnContinue();
monCanvas.clearSignbtn();