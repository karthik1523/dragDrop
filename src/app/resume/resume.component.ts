import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import  * as pdfMake from "pdfmake/build/pdfmake.js";  
import  * as pdfFonts from "pdfmake/build/vfs_fonts.js";  
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
sendobject :any=[
  {
      "key": "FSSAI",
      "value": "https://allmartb2b.s3.amazonaws.com/seller/products/mobile_view-8d823485-23d8-45c5-af59-1fb95a7b5ae9.jpg"
  },
  {
      "key": "GST",
      "value": "https://allmartb2b.s3.amazonaws.com/tenant_docs/b3a30514-9402-40fd-9745-38d2d0fbabda/GST.pdf"
  },
  {
      "key": "PAN",
      "value": "https://allmartb2b.s3.amazonaws.com/tenant_docs/b3a30514-9402-40fd-9745-38d2d0fbabda/PAN.pdf"
  },
  {
      "key": "SIGN",
      "value": "https://allmartb2b.s3.amazonaws.com/tenant_docs/b3a30514-9402-40fd-9745-38d2d0fbabda/SIGN.pdf"
  }
];
https: any;
   
  constructor(
    private sanitizer: DomSanitizer
  ) { 
   
   
  }



  ngOnInit(): void {
  
 }

 onChnage(promo:string):any{
 if(promo){
  return this.sanitizer.bypassSecurityTrustResourceUrl(promo);
 }
 else{
  return ''
 }
 }


 








   

 
}







