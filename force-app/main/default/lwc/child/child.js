import { LightningElement, wire } from 'lwc';

// Import Lightning Message Service
import { MessageContext, subscribe, APPLICATION_SCOPE } from 'lightning/messageService';

// Import Custom Message Channel
import CustomMessageChannel from '@salesforce/messageChannel/CustomMessageChannel__c';

export default class Child extends LightningElement {
    message = null;
    subscribe = null;

    @wire(MessageContext)
    messageContext

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() { //disconnectCallback
        this.subscribeToMessageChannel();
    }

    // Add subscribe to default method
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                CustomMessageChannel,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    handleMessage(message) {
        // this.message = message.messageToSend;
        this.message = 'AAAAA';
    }    
}