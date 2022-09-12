
class Auto{

    public estaEncendido:boolean;
    public marchaActual:number;
    public velocidadActual:number;
    public modelo : string;
    public marca : string;
    public patente : string;
      
    constructor(paramPrendido:boolean,paramMarcha:number,paramVelocidad:number,paramMarca:string,paramModelo:string,paramPatente:string){
       this.estaEncendido = paramPrendido;
       this.marchaActual = paramMarcha;
       this.velocidadActual = paramVelocidad;
       this.marca=paramMarca;
       this.modelo=paramModelo;
       this.patente=paramPatente;
    }

    obtenerMarca():string{
        return this.marca;
    }
    obtenerModelo():string{
        return this.modelo;
    }
    obtenerPatente():string{
        return this.patente;
    }
   
    prenderApagar(): void{
       if(this.estaEncendido===true){
           this.estaEncendido = false;
       }else{
           this.estaEncendido = true;
       }
    }
    subirMarcha():void{
       this.marchaActual = this.marchaActual+1;
   }
    bajarMarcha():void{
    this.marchaActual = this.marchaActual-1;
   }
    subirVelocidad():void{
    this.velocidadActual = this.velocidadActual++;
   }
    bajarVelocidad():void{
    this.velocidadActual =0;
   }
}

   let autoUno = new Auto(true,2,25,"FIAT","Tipo","BEH405");
   let autoDos = new Auto(false,6,150,"AUDI","Q7","AD750VX");
   let autoTres = new Auto(true,1,10,"Volkswagen","Gol","AB980CD");

   console.log("--------------");
   console.log("Los datos de los autos cargados son los siguientes: ");
   console.log(autoUno);
   console.log(autoDos);
   console.log(autoTres);
   console.log("--------------");
