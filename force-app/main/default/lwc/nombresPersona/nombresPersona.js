import { LightningElement, track } from 'lwc';

export default class NombresPersona extends LightningElement {
    totalName1;
    firstName;
    secondName;
    @track bandera = false;
    @track arrayNombre = [];

    getName(event){

        const inputName = event.target.name;
        if(inputName == "nombre"){
           this.firstName = event.target.value;
        }else if(inputName == "apellido"){
            this.secondName = event.target.value;
        }
        
    }

    addNames(){
        if(this.firstName != '' && this.secondName != ''){
            const totalName = this.firstName +' '+ this.secondName;
            this.arrayNombre.push(totalName);
            this.bandera = true;

        }
        }
        

}