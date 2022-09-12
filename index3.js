var Auto = /** @class */ (function () {
    function Auto(paramPrendido, paramMarcha, paramVelocidad, paramMarca, paramModelo, paramPatente) {
        this.estaEncendido = paramPrendido;
        this.marchaActual = paramMarcha;
        this.velocidadActual = paramVelocidad;
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.patente = paramPatente;
    }
    Auto.prototype.obtenerMarca = function () {
        return this.marca;
    };
    Auto.prototype.obtenerModelo = function () {
        return this.modelo;
    };
    Auto.prototype.obtenerPatente = function () {
        return this.patente;
    };
    Auto.prototype.prenderApagar = function () {
        if (this.estaEncendido === true) {
            this.estaEncendido = false;
        }
        else {
            this.estaEncendido = true;
        }
    };
    Auto.prototype.subirMarcha = function () {
        this.marchaActual = this.marchaActual + 1;
    };
    Auto.prototype.bajarMarcha = function () {
        this.marchaActual = this.marchaActual - 1;
    };
    Auto.prototype.subirVelocidad = function () {
        this.velocidadActual = this.velocidadActual++;
    };
    Auto.prototype.bajarVelocidad = function () {
        this.velocidadActual = 0;
    };
    return Auto;
}());
var autoUno = new Auto(true, 2, 25, "FIAT", "Tipo", "BEH405");
var autoDos = new Auto(false, 6, 150, "AUDI", "Q7", "AD750VX");
var autoTres = new Auto(true, 1, 10, "Volkswagen", "Gol", "AB980CD");
console.log("--------------");
console.log("Los datos de los autos cargados son los siguientes: ");
console.log(autoUno);
console.log(autoDos);
console.log(autoTres);
console.log("--------------");
