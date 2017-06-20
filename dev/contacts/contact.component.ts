import {Component} from 'angular2/core';



@Component({
  selector: 'contact',
  template: `
        <input type="text" [(ngModel)]="contact.lastName" />
        <div>                              
          Phone Number: {{contact.phone}} <br>
          Email: {{contact.email}}
        </div>
    `,
        inputs:["contact"]
})
export class ContactComponent {
        public contact={};
}
