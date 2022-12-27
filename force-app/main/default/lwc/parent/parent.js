import { LightningElement, wire } from 'lwc';

// Import Message Server & publish event
import { MessageContext, publish } from 'lightning/messageService';

// Import Custom Message Channel
import  CustomMessageChannel  from '@salesforce/messageChannel/CustomMessageChannel__c';

export default class Parent extends LightningElement {
    @wire(MessageContext)
    messageContext

    handleClick(event) {
        const payload = { messageToSend : 'From Zero to Hero'};
        publish(this.messageContext, CustomMessageChannel, payload);
    }
}