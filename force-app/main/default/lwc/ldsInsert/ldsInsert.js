import { LightningElement,wire } from 'lwc';

import {createRecord, getRecord} from "lightning/uiRecordApi";
const fieldarray=['Account.Name','Account.Phone','Account.Website'];
export default class LdsInsert extends LightningElement {

    accountName;
    accountPhone;
    accountWebsite;
    recordId;

    changeName(event){
        this.accountName=event.target.value;
    }
    changePhone(event){
        this.accountPhone=event.target.value;
    }
    changeWebsite(event){
        this.accountWebsite=event.target.value;
    }

    @wire(getRecord, {recordId:'$recordId',fields:fieldarray})
    accountRecord;

    createAccount(){
        console.log('Hi');
        const fields={'Name':this.accountName,'Phone':this.accountPhone,'Website':this.accountWebsite};
        const recordInput={apiName:'Account',fields};
        createRecord(recordInput).then(response=>{
            this.recordId=response.id;
            var str=JSON.stringify(response);
            console.log('record created : '+this.recordId+'  Whole data  '+str);
            
        }).catch(error=>{
            console.error('error');
        });
    }
    get retAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
   }

   get retAccountPhone(){
    if(this.accountRecord.data){
        return this.accountRecord.data.fields.Phone.value;
    }
    return undefined;
    }

    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
   }

   
}