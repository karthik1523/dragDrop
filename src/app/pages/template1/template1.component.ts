import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] | undefined;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [], label: 'Volume Sales' },
    { data: [], label: 'Value Sales' }
  ];
  constructor(private _emp: DataService) {
  }
  ngOnInit() {
    // this._emp.getSales().subscribe(data => {
    //   this.barChartLabels = Object.keys(data);
    //   this.barChartLabels.forEach(label => {
    //     this.barChartData[0].data.push(data[year1]['volumeSales']);
    //     this.barChartData[1].data.push(data[year2]['valueSales']);
    //   });
    // });;
  }


}

