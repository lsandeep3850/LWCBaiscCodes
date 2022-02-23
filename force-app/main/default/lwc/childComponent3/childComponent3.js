import { LightningElement,api } from 'lwc';

export default class ChildComponent3 extends LightningElement {

    @api courseDetails={'courseName':'Admin','courseCode':'A101'};
   
}