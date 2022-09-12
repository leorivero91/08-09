
class Televisor{

    public estaPrendido:boolean;
    public volumenActual:number;
    public canalActual:number;
    public modelo:string;
    public marca:string;
    public pulgadas:number;

    constructor(paramVolumen:number,paramPulgadas:number){
        this.volumenActual = paramVolumen;
        this.pulgadas = paramPulgadas;
    }


    prenderApagar():void{
        if(this.estaPrendido === true){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }
    }
    
    obtenerVolumen():number{
        return this.volumenActual;
    }

    obtenerPulgadas():number{
        return this.pulgadas;
    }


    subirVolumen():void{
        this.volumenActual = this.volumenActual++;
    }

    setearPulgadas(paramPulgadas:number):void{
        this.pulgadas=paramPulgadas;
    }
}


let primerTelevisor = new Televisor(45,96);

let volumenDelPrimerTelevisor:number = primerTelevisor.obtenerVolumen();

console.log("volumen "+volumenDelPrimerTelevisor);
