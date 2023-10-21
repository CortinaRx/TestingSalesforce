import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {

    value = ['red'];

    options = [{ label: 'Ross', value: 'red' },
               { label: 'Rachel', value: 'blue' },]

    
    @api
    selectCheckbox(checkboxValue){
        const selectedCheckbox = this.options.find(checkbox =>{
            return checkboxValue === checkbox.value
        })

        if(selectedCheckbox === true){
            this.value = selectedCheckbox.value;
            return "Succesfuly check";
        } 
            return 'No checkbox found'
        
    }

}