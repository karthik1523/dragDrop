import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allpos',
  templateUrl: './allpos.component.html',
  styleUrls: ['./allpos.component.css']
})
export class AllposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   table1=['Till','Opened On','Opened By','Opened Amount','Closed On','Closed By','Closing Cash','Actual Cash'];
   table2=['T22 / Jay-Web','08-11-2022 14:14:47','E009/Allpos','100.00','08-11-2022 14:18:40','E009/Allpos','₹1200.00','₹ 100.00'];

   table3=['Sale Amount','Sale Discount','Avg Sale Amount',' No of Invoice'];
   table4=['₹ 346.67','₹ 0.00',' ₹ 346.67',1];
   table5=['Sale Amount','Product Discount','No of Products'];
   table6=['₹ 301.00','₹ 0.00','5']
}

