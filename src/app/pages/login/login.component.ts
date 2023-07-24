import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http:HttpClient, private route:Router) { }
  listed:any[]=[]
  loginList:any=[]
  signuplist:Array<{email:string,password:string}>=[];
  words='';
  loginValLoader!:boolean
  

  ngOnInit(): void {
    this.fetchpost()
  }

  fetchpost(){
     this.http.get( 'http://localhost:5000/login').subscribe(res=>{
      this.loginList= res
   
         
     })
 
     
   
   }

  onsubmit(list:NgForm){
    const data1=list.value
    this.listed=list.value
    list.reset()
    

    console.log(this.loginList)


  if(this.loginList.find((res:any) =>{
   
   return res.password === data1.password && res.email === data1.email
  }
  ))
  
  {
  // if(this.loginList.find((res:any) =>{res.email === data1.email})  && this.loginList.find((res:any) =>{res.password === data1.password})){
    this.words='Success'
    this.route.navigateByUrl('/new')
    setTimeout(() => this.loginValLoader = false, 1000)
  }
  else{
    this.words= 'please Sign up '
    this.loginValLoader=true;
  }


 

}

SignUp(values:NgForm){
  const signup=values.value
    this.http.post('http://localhost:5000/login', signup ).subscribe(res=>{
        res
  })


  
} 

  

}
