import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  
  template:`<div class="alert alert-success" [ngClass]="{fadeOut:displayNotification}">
  <p>
  The websites uses cookies to provide better user experience
  <div class="close"><button class="btn"(click)="closeNotification()">X</button></div>
  </div>`,
 styles: [
  `
    div {
      margin: 10px 0px;
      padding: 10px 20px;
      background-color: #808080;
      text-align: center;
    }
    .close {
      float: right;
      margin-top: -15px;
    }
    .fadeOut {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s 2s, opacity 2s linear;
    }
  `
]
})
export class NotificationComponent {

  ngOnInit() {
  
  }
  displayNotification:boolean=false

  closeNotification(){
    this.displayNotification=true;

  }

}
