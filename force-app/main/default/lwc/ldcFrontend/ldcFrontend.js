import { LightningElement } from 'lwc';


export default class LdcFrontend extends LightningElement {
   recordId;
successHandler(event){
    this.recordId=event.detail.id;
}

}