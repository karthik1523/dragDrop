import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren('input') draggables: ElementRef | any;

  title = 'dragDrop';
  list=['kavitha','karthik','kalai','kumar','prakash'];
  newlist:any=[];
cdkDrag=false;
  onclick(response:any){
      this.newlist.push(response);
      this.cdkDrag=true;
     const ele=   document.getElementById('one')
       console.log(ele)
  }
}
