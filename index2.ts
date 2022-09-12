
class Radio{

    public estaPrendido:boolean;
    public volumenActual:number;
    public dialActual:number;
    public frecuencia:string;
      
    constructor(paramPrendido:boolean,paramVolumen:number,paramDial:number,paramFrecuencia:string){
       this.estaPrendido = paramPrendido;
       this.volumenActual = paramVolumen;
       this.dialActual = paramDial;
       this.frecuencia = paramFrecuencia;
    }
   
    prenderApagar(): void{
       if(this.estaPrendido===true){
           this.estaPrendido = false;
       }else{
           this.estaPrendido = true;
       }
    }

    subirVolumen():void{
        this.volumenActual = this.volumenActual++;
    }

    obtenerDial():number{
        return this.dialActual;
    }

    subirDial():void{
        this.dialActual = this.dialActual++;
    }
    }
    

   let primerRadio = new Radio(true,12,95.3,"am");
   let dialActual:number =primerRadio.obtenerDial();
   console.log("El dial es " + dialActual);