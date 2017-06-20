import {Component} from 'angular2/core'
import {ContactComponent} from "./contact.component";


@Component({
  selector:"contact-list",
   template:`
    <ul>
          <li *ngFor="#contact of contacts"               
              (click)="onSelect(contact)"
              [class.clicked]="selectedContact===contact"
              >
            {{contact.firstName}} {{contact.lastName}}
          </li>        
    </ul>
    <contact [contact]="selectedContact"></contact>
`,
  directives:[ContactComponent],
  styleUrls:["../src/css/app.css"]
})

export class ContactListComponent{
  public contacts =[
    {firstName:"Qian", lastName:"Liang", phone:"123345678", email:"charles@gmail.com"},
    {firstName:"Max", lastName:"Schwarmuler", phone:"123345678", email:"charles@gmail.com"},
    {firstName:"Chris", lastName:"Raches", phone:"32553111", email:"charles@gmail.com"},
    {firstName:"Michael", lastName:"Alloy", phone:"9073674382", email:"charles@gmail.com"},
    {firstName:"Indria", lastName:"Galah", phone:"8932483", email:"charles@gmail.com"},
  ];

  public selectedContact={};

  onSelect(contact){
    this.selectedContact=contact;
  }

}



