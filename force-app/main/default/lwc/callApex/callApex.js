import { LightningElement } from 'lwc';


import getData from '@salesforce/apex/apexClass1.getData';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CallApex extends LightningElement {

    numberofRecords;
    accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    changeHandler(event){
        this.numberofRecords=event.target.value;
    }

    getRecords(){
       // console.log("Entered");
        getData({noofRecords:this.numberofRecords}).then(response=>{
            this.accounts=response;
         //   console.log("data get")
         const toastEvent= new ShowToastEvent({
             title: 'Account Loaded',
             message: this.numberofRecords +' Accounts Fetched',
             variant:'success'
         });
         this.dispatchEvent(toastEvent);
        }).catch(error=>{
            console.error('error');
            const toastEvent= new ShowToastEvent({
                title: 'Error',
                message: error.body.message,
                variant:'error'
            });
            this.dispatchEvent(toastEvent);
        })
    }

}