import { LightningElement, api } from 'lwc';

export default class Alumno extends LightningElement {
    @api nombre = '';

    handleInputChange(event){
        const nuevoNombre = event.target.value;
        const cambioNombreEvent = new CustomEvent('cambionombre', {detail: nuevoNombre});
        this.dispatchEvent(cambioNombreEvent);
    }
}