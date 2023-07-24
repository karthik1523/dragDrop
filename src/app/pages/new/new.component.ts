import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @ViewChild('one') one: ElementRef | any;

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChildren('input') draggables: ElementRef | any;


  title = 'dragDrop';
  list=['kavitha','karthik','kalai','kumar','prakash'];
  newlist:any=[];
cdkDrag=false;
  onclick(response:any){
      this.newlist.push(response);
      this.cdkDrag=true;
     const ele=   document.getElementById('one')
       console.log(response)
  }

  
 clickLeft(){
  this.one.nativeElement.scrollLeft += 500;

 }
 clickRight(){
  this.one.nativeElement.scrollLeft -= 500;

 }
}
