import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-asset-fixing',
  templateUrl: './asset-fixing.component.html',
  styleUrls: ['./asset-fixing.component.css']
})
export class AssetFixingComponent implements OnInit {

  constructor() { }
  chairs:Array<{no:number,type:boolean}>=[{no:1,type:false},{no:2,type:false},{no:3,type:false},{no:4,type:false},{no:5,type:false},]
  shapes=['square','circle','rectangle'];
  color=['red','yellow','green']
  newSquare:any=[];
  newrect:any=[];
  newcircle:any=[];
  submittedList:any[]=[];
  // array=[false,false,false,false,false]


  
  


  ngOnInit(): void {
  }
  
// onchair(response:any){
//  console.log(response)

//  response.forEach(() =>{
//    response.type=false
//  })

//   for(let i=0; i< response ; i++){
//     response[i].type = true;

//   }


     
      

// }

onsubmitting(response:any){
  let   array=[false,false,false,false,false]
  console.log('yes responses',response);
    response.type= array
    console.log('yes Submitted',this.submittedList);
    this.submittedList.push(response);
    
    
    
     this.submittedList.find((response) =>{
      
      for(let i=0; i< response.Chairs ; i++){
        response.type[i] = true;
        
      }
      
      
    
    

   })
 
}


}
