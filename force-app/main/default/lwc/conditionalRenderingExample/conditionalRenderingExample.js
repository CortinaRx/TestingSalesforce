import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;

    @track cityList = ["Pera","Manzana", "Tamarindo"];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }

}