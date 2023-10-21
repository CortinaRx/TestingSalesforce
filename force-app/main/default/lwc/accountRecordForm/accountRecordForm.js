import { LightningElement, track } from 'lwc';

export default class AccountRecordForm extends LightningElement {

    recordId;
    @track fieldsArray = ['Name', 'Phone', 'Website']

    handleSuccess(event){
        this.recordId = event.detail.id;
    }

}