import { LightningElement, track } from "lwc";
import getAllAccounts from '@salesforce/apex/AccountManager.getAccounts'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManageApex extends LightningElement {

    @track numberOfRecords;
    @track accounts;

    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
        console.log(event.target.value);
    }


    getAccounts() {
        getAllAccounts({numberOfRecords: this.numberOfRecords})
            .then(response => {
                if (response) {
                    this.accounts = response;
                    const toastEvent = new ShowToastEvent({
                        title: 'Accounts Loaded',
                        message: this.numberOfRecords + 'Accounts Fetched from Server',
                        variant: 'success',
                    })
                    this.dispatchEvent(toastEvent);
                } else {
                    console.log('La respuesta del método Apex es nula.');
                   
                }
            })
            .catch(error => {
                const toastEvent = new ShowToastEvent({
                    title: 'Accounts Loaded',
                    message: this.numberOfRecords + ' Accounts Fetched from Server',
                    variant: 'error',
                });
                this.dispatchEvent(toastEvent);
            });
    }



    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    


}