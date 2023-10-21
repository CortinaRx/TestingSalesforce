import { LightningElement, track, wire } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track dynamicGreeting = 'Desde Dinamyc World';

    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value;
    }

}