import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterContentChecked{
 @Input() value:string="kavya"
 constructor(){
  console.log('consturtor called');
  //console.log(this.value)
 }
 ngOnChanges(change:SimpleChanges){
  console.log('ngOnchangescalled')
  console.log(change)
 }
ngOnInit(): void {
  console.log("ngonit called")
 // console.log(this.value)
}
ngDoCheck(){
  console.log("ngdocheckcalled")
}
ngAfterContentInit(){
  console.log("ngaftercontentinit called")
}
ngAfterContentChecked(){
  console.log("ngaftercontentchecked called");
}
ngAfterViewInit(){
  console.log("ngAfterviewInit called")
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked called")
}
ngOnDestroy(){
  console.log("ngOnDestroy called")
}
}
