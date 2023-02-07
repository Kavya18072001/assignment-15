import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecyclehook';
  inputtext:string="";
  destroy:boolean=true;
  onsubmit(inputelement:HTMLInputElement){
  this.inputtext=inputelement.value;
  }
  destroycomponent(){
    this.destroy=false;
  }
}
