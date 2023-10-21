import { LightningElement, api } from 'lwc';

export default class Trabajador extends LightningElement {
     trabajador = { name: '', age: 0 };

    handleNombreCambiado(event){
        const nuevoNombre = event.target.value;
        this.trabajador = { ...this.trabajador, name: nuevoNombre };

        const cambioNombreEvent = new CustomEvent('cambionombre', {
            detail: nuevoNombre});
        
            this.dispatchEvent(cambioNombreEvent);
    }

}