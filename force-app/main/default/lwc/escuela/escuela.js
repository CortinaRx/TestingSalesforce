import { LightningElement } from 'lwc';

export default class Escuela extends LightningElement {

    
    nombre = "Ricardo";
    edad = 30;

    handleNombreCambiado(event){
        this.nombre = event.detail;
    }


}