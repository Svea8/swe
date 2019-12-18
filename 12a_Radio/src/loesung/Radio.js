class Radio{

    constructor(lautstaerke=10, frequenz=85.0){

        this.eingeschaltet=false;

        if(lautstaerke<0){

            this.lautstaerke=0;

        }

        else if(lautstaerke>10){

            this.lautstaerke=10;

        }

        else{

            this.lautstaerke=lautstaerke;

        }

        if(frequenz<85.0){

            this.frequenz=85.0;

        }

        else if(frequenz>110.0){

            this.frequenz=110.0;

        }

        else{

            this.frequenz=frequenz;

        }

    }

    lauter(){

        if(this.eingeschaltet==true&this.lautstaerke<10){

            this.lautstaerke=this.lautstaerke+1;

        }

    }

    leiser(){

        if(this.eingeschaltet==true&this.lautstaerke>0){

            this.lautstaerke=this.lautstaerke-1;

        }

    }

    an(){

        this.eingeschaltet=true;

    }

    aus(){

        this.eingeschaltet=false;

    }

    toString(){

        let string="";

        if(this.eingeschaltet==true){

            string=this.frequenz+", Vol: "+this.lautstaerke+"/10"

        }

        else{

            string="---aus---";

        }

        return string;

    }

    frequenzSetzen(f){

        //Hab ich doch schon oben implementiert, warum brauch ich extra Funktion?

        let aktFrequenz=f.frequenz;

        if(aktFrequenz>110&&this.eingeschaltet==true){

            aktFrequenz=110;

        }

        else if(aktFrequenz<85&&this.eingeschaltet==true){

            aktFrequenz=85;

        }

 

        

    }

}