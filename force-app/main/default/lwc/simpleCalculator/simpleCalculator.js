import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    @track currentResult;

    firstNumber;
    secondNumber;
    @track previousResults = [];
    @track showPreviousResults = false;

    numberChangeHandler(event){
      const inputBoxName = event.target.name
      if(inputBoxName === 'firstNumber'){
        this.firstNumber = event.target.value;
      }else if(inputBoxName === 'secondNumber'){
        this.secondNumber = event.target.value;
      }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = ` Este es el resultado de la operación : ${firstN + secondN}`;
        const sumatoria = firstN + secondN;
        this.arrayNumber.push(sumatoria);
        
    }
    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = ` Este es el resultado de la operación : ${firstN - secondN}`;
        const sumatoria = firstN - secondN;
        this.arrayNumber.push(sumatoria);
    }
    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = ` Este es el resultado de la operación : ${firstN * secondN}`;
        const sumatoria = firstN * secondN;
        this.arrayNumber.push(sumatoria);
    }
    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = ` Este es el resultado de la operación : ${firstN / secondN}`;
        const sumatoria = firstN / secondN;
        this.arrayNumber.push(sumatoria);
    }

    showPreviousResultToggle(event){
        this.showPreviousResults = event.target.checked;
    }
    

}