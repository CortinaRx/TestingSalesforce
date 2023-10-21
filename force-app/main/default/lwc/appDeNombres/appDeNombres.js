import { LightningElement, track, api } from 'lwc';

export default class AppDeNombres extends LightningElement {
    @track nombre;
    @track listadoNombres = [];

    valorGuardado(event){
        const nuevoNombre = event.target.value;
        this.nombre = nuevoNombre;
    }

    pushArray() {
            const nombreObtenido = this.nombre;
            this.listadoNombres.push(nombreObtenido);
        
        
    }



}