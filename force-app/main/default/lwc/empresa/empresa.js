// Empresa.js
import { LightningElement } from 'lwc';

export default class Empresa extends LightningElement {
   
    trabajadores = [{name: "Ricardo", age: 31}, {name: "Valentina", age:30}]

    onChangeName(event){
        const nombreNew = event.detail;
        const trabajadorModificado = this.trabajadores.find(trabajador => trabajador.name === nombreNew);

        if (trabajadorModificado) {
            // Modifica el nombre del trabajador encontrado
            trabajadorModificado.name = 'loquesea'; // Reemplaza 'NuevoNombre' con el valor deseado
        }
        this.trabajadores = [...this.trabajadores];
        
    }

}