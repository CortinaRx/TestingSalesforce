import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle;
    texto = "Ricardo";
    get bmiValue(){
        return `Your name its ${this.texto}`
    }
    
}