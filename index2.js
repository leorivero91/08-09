var Radio = /** @class */ (function () {
    function Radio(paramPrendido, paramVolumen, paramDial, paramFrecuencia) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.dialActual = paramDial;
        this.frecuencia = paramFrecuencia;
    }
    Radio.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Radio.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    Radio.prototype.obtenerDial = function () {
        return this.dialActual;
    };
    Radio.prototype.subirDial = function () {
        this.dialActual = this.dialActual++;
    };
    return Radio;
}());
var primerRadio = new Radio(true,12, 95.3, "am");
var dialActual = primerRadio.obtenerDial();
console.log("El dial es " + dialActual);
