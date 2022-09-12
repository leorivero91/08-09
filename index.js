var Televisor = /** @class */ (function () {
    function Televisor(paramVolumen, paramPulgadas) {
        this.volumenActual = paramVolumen;
        this.pulgadas = paramPulgadas;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.obtenerVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.obtenerPulgadas = function () {
        return this.pulgadas;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    Televisor.prototype.setearPulgadas = function (paramPulgadas) {
        this.pulgadas = paramPulgadas;
    };
    return Televisor;
}());
var primerTelevisor = new Televisor(45, 96);
var volumenDelPrimerTelevisor = primerTelevisor.obtenerVolumen();
console.log("volumen " + volumenDelPrimerTelevisor);
