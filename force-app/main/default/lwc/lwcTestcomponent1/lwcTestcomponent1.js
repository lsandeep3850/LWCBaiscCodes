import { LightningElement } from 'lwc';

export default class LwcTestcomponent1 extends LightningElement {

    firstValue;
    secondValue;
    result;
    course=['Admin','Developer','LWC'];
    display=false;

    showDisplay(){
        this.display=!this.display;
    }

    changeHandler(event){
        var value=event.target.name;
        if(value === 'FirstValue'){
              this.firstValue=event.target.value;
            
        }
        else{
               this.secondValue=event.target.value;
        }
    }
addCal(){
    console.log('add');
    var input1=this.firstValue;
    var input2=this.secondValue;
    this.result=parseInt(input1)+parseInt(input2);
}

subcal(){
    var input1=this.firstValue;
    var input2=this.secondValue;
    this.result=parseInt(input1)-parseInt(input2);
}

mulcal(){
    var input1=this.firstValue;
    var input2=this.secondValue;
    this.result=parseInt(input1)*parseInt(input2);
}

divcal(){
    var input1=this.firstValue;
    var input2=this.secondValue;
    this.result=parseInt(input1)/parseInt(input2);
}

}