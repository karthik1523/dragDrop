import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { width } from 'pdfkit/js/page';
import  * as pdfMake from "pdfmake/build/pdfmake.js";  
import  * as pdfFonts from "pdfmake/build/vfs_fonts.js";  
// pdfMake.vfs == pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.css']
})
export class PdfmakeComponent implements OnInit {
  docDefinition:any
  printing:any
  ctx: any;
  constructor() { 
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
   
  }

  

  ngOnInit(): void {
   
 }



  
public export() :void {
  this.docDefinition = {
    pageSize: 'A4',
    pageMargins: [20, 40, 20, 90],
    footer: function(currentPage:any,pageCount:any,pageSize:any){
      return[
        {
          
          table:{
            widths:['*','*'],
            body:[
              [{ type:'none',ul:[
                       {text:'Terms and Conditions:',style:{bold:true}},
                       {text:'No Return'}
  
              ],colSpan:2,style:{alignment:'left'}},''],
              [{text:'Customer Seal and Signature'},{
                type:'none',ul:[
                  {text:'For Chennai Branch',style:{bold:true}},{text:'.'},{text:'Autorized Signature'}
                ],style:'header2',
            
                
              }]
              
  
            ],
  
          },
          style:'content1',
          layout: {
            hLineWidth: function (i:any, node:any) {
              return (i === 0 || i === node.table.body.length) ? 2 : 2;
            },
            vLineWidth: function (i:any, node:any) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 2;
            },
            hLineColor: function (i:any, node:any) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
            },
            vLineColor: function (i:any, node:any) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
            }
          }
        },
      
      ]

    },
    
       
    
    header: function(currentPage:any, pageCount:any, pageSize:any) {
      // you can apply any logic and return any valid pdfmake element
  
      return [
        { text: 'Purchase Order', alignment: (currentPage % 2) ? 'center' : 'center',style:"mainheader"},
        { canvas: [ { type: 'rect', x: 0, y: 52, w: pageSize.width - 170, h: 150 } ] }
      ]
    },
  
    content: [
      {
        table:{
          
          widths:[200,'*'],
          body:[
            [{type:'none', style:{lineHeight:1.2}, ul: [
              {text:'Chennai Branch',style:'branch'},
              'No.9/2,4th cross street',
              'Chennai, Tamil Nadu',
              'India, 632504',
              'TAX NO :GSNTN239048',
              'Phone:876543234',
              'Email:kamal@gmail.com'

            ],},{text:'images',style:{alignment:'right'}}],
            [{type:'none',
            ul:[
              {text:'Customer:' ,style:{bold:false,fontSize:15}},
              {text:'Walk in Customer',style:{bolder:true,fontSize:20}}
            ]
    },
    {
      table:{
      widths:[100,5,'*'],
      style:{alignment:'left'},
      body:[
        [ {type:'none' , style:{lineHeight:1.2},ul:[
          'Invoice Number',
          'Invoice Date',
          'Till',
          'Cashier',
          'Order Type',
          'Invoice Status',
          'Payment Status'
        ]},{type:'none',style:{lineHeight:1.2},ul:[
          ':',
          ':',
          ':',
          ':',
          ':',
          ':',
          ':',
        ]},{type:'none', style:{lineHeight:1.2},ul:[
          {text:'INVNO-T22-22062022-005',style:{bold:true}},
          {text:'22-06-2022 00:27:25',style:{bold:true}},
          'T22 / Jay-Web',
          'E009 / Allpos',
          'Dine In',
          'Pending',
          'Pending'


        ]}]
      ]
    },
    layout: {
    hLineWidth: function (i:any, node:any) {
      return (i === 0 || i === node.table.body.length) ? 0: 0;
    },
    vLineWidth: function (i:any, node:any) {
      return (i === 0 || i === node.table.widths.length) ? 0 : 0;
    },
    hLineColor: function (i:any, node:any) {
      return (i === 0 || i === node.table.body.length) ? 'gray' : 'none';
    },
    vLineColor: function (i:any, node:any) {
      return (i === 0 || i === node.table.widths.length) ? 'gray' : 'none';
    }
  }} ]

          ]

        },
        layout: {
          hLineWidth: function (i:any, node:any) {
            return (i === 0 || i === node.table.body.length) ? 2: 2;
          },
          vLineWidth: function (i:any, node:any) {
            return (i === 0 || i === node.table.widths.length) ? 2 : 0;
          },
          hLineColor: function (i:any, node:any) {
            return (i === 0 || i === node.table.body.length) ? 'gray' : 'none';
          },
          vLineColor: function (i:any, node:any) {
            return (i === 0 || i === node.table.widths.length) ? 'gray' : 'none';
          }
        }
      },
      {
        
        table: {
          widths:[30,130,40,50,40,50,40,40,40],
          body: [
           
            [{text:'S.no',style:'header'}, {text:'Item Description',style:'header'},{text:'Base Price',style:'header'}, {text:'Product Discount',style:'header'},{text:'unit Price',style:'header'}, {text:'Tax Amount',style:'header'},{text:'Sell Price',style:'header'},{text:'QTY',style:'header'},{text:'Total',style:'header'}],
            ['1', { type:'none', ul:['P005 - Paniyaram 1/2 Kg','SKU:15']}, '15.00', { type:'none', ul:['0.00','0.00%']},'15.00','1','15',20,20],
            ['1', { type:'none', ul:['P005 - Paniyaram 1/2 Kg','SKU:15']}, '15.00', { type:'none', ul:['0.00','0.00%']},'15.00','1','15',20,20],
            [{colSpan:3,type:'none',ul:[
              
                'TOtal Items   :  3',
                'Total Quality :  5'
              
            ]},'','',
            {colSpan:3,border:[false,false,false,true],type:'none',ul:[
              'Subtotal',
              'Product Charges',
              'Service Charges',
              {text:'Total',style:{bold:true}}
            ]
          },'','',
          {colSpan:3, style:{alignment:'right'},type:'none',ul:[
            '200.00',
            '50.00',
            '50.00',
            {text:'300',style:{bold:true}}
          ]
        },'','']

          ]},
          style:'walkin',
          layout: {
            hLineWidth: function (i:any, node:any) {
              return (i === 0 || i === node.table.body.length) ? 2: 2;
            },
            vLineWidth: function (i:any, node:any) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 2;
            },
            hLineColor: function (i:any, node:any) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
            },
            vLineColor: function (i:any, node:any) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
            }
          }

      },
      {
        table:{
          widths:['*','*','*','*'],
          body:[
            [{text:'Tax Summary',colSpan:4,style:{bold:true,fontSize:20,alignment:'left'}},'','',''],
            [{text:'Tax Name',style:{bold:true}},{text:'Tax %',style:{bold:true}},{text:'Taxable Amount',style:{bold:true}},{text:'Tax Amount',style:{bold:true}}],
            ['CGST','2.50','233.32','5.84'],
            ['SGST/UTGST','2.50',233.32,5.84],
            ['CGST',0.00,15.00,0.00],
            ['IGST',0.00,15.00,0.00],
            [{text:'Total',colSpan:3,style:{alignment:'right',bold:true}},'','',{text:'234',style:{alignment:'right',bold:true}}]
          ]
        },
        style:'content',
          layout: {
            hLineWidth: function (i:any, node:any) {
              return (i === 0 || i === node.table.body.length) ? 2 : 2;
            },
            vLineWidth: function (i:any, node:any) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 2;
            },
            hLineColor: function (i:any, node:any) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
            },
            vLineColor: function (i:any, node:any) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
            }
          }
      },
      {
        table:{
          widths:['*','*','*','*'],
          body:[
            [{text:'Orders Charges Summary',colSpan:4,style:{bold:true,fontSize:20,alignment:'left'}},'','',''],
            [{text:'Charge Name',style:{bold:true,}},{text:'Charge Amount',style:{bold:true}},{text:'Tax Amount',style:{bold:true}},{text:'Total Amount',style:{bold:true}}],
            [{text:'OCG-002 - Service Charge',style:'header1'},{text:'9.52',style:'header2'},{text:'0.48',style:'header2'},{text:'10',style:'header2'}],
           [{text:'Total',style:'header'},{text:'9.52',style:'header2'},{text:'0.48',style:'header2'},{text:'10.00',style:'header2'}]
          ]
        },
        style:'content',
          layout: {
            hLineWidth: function (i:any, node:any) {
              return (i === 0 || i === node.table.body.length) ? 2 : 2;
            },
            vLineWidth: function (i:any, node:any) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 2;
            },
            hLineColor: function (i:any, node:any) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
            },
            vLineColor: function (i:any, node:any) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
            }
          }
      },
      {
        table:{
          widths:['*','*','*','*'],
          body:[
            [{text:'product Charges Summary',style:'leftHeader',colSpan:4},'','','' ],
            [{text:'Charge Name',style:'headertitle1'}, {text:'Charge Amount',style:'headertitle2'},{text:'Tax Amount',style:'headertitle2'},{text:'Total Amount',style:'headertitle1'}],
            [{text:'P005/Paniyaram 1/2 kg',colSpan:4,style:'headertitle1'},'','',''],
            [{text:'PCG-001 - Packing Charge',style:'header1'},{text:'9.52',style:'header2'},{text:'0.48',style:'header2'}, {text:'10',style:'header2'}],
            [{text:'PCG-002 - Carton Box- Packing Charge',style:'header1'},{text:'19.05',style:'header2'},{text:'0.48',style:'header2'}, {text:'20',style:'header2'}],
            [{text:'P0015/Paniyaram 4 Nos',colSpan:4,style:'headertitle1'},'','',''],
            [{text:'PCG-001 - Packing Charge',style:'header1'},{text:'9.52',style:'header2'},{text:'0.48',style:'header2'}, {text:'10',style:'header2'}],
            [{text:'P0012 Bajji 4 Nos',colSpan:4,style:'headertitle1'},'','',''],
            [{text:'PCG-001 - Packing Charge',style:'header1'},{text:'9.52',style:'header2'},{text:'0.48',style:'header2'}, {text:'10',style:'header2'}],
            [{text:'Total',style:'header'},{text:'47.61',style:'headertitle2'},{text:'2.39',style:'headertitle2'},{text:'50.00',style:'headertitle2'}]

          ]

        },
        style:'content',
        layout: {
          hLineWidth: function (i:any, node:any) {
            return (i === 0 || i === node.table.body.length) ? 2 : 2;
          },
          vLineWidth: function (i:any, node:any) {
            return (i === 0 || i === node.table.widths.length) ? 2 : 2;
          },
          hLineColor: function (i:any, node:any) {
            return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
          },
          vLineColor: function (i:any, node:any) {
            return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
          }
        }
      },
      {
        table:{
          widths:['*','*'],
          body:[
            [{ type:'none',ul:[
                     {text:'Terms and Conditions:',style:{bold:true}},
                     {text:'No Return'}

            ],colSpan:2,style:{alignment:'left'}},''],
            [{text:'Customer Seal and Signature'},{
              type:'none',ul:[
                {text:'For Chennai Branch',style:{bold:true}},{text:'.'},{text:'.'},{text:'Autorized Signature'}
              ],style:'header2',
          
              
            }]
            

          ],

        },
        style:'content',
        layout: {
          hLineWidth: function (i:any, node:any) {
            return (i === 0 || i === node.table.body.length) ? 2 : 2;
          },
          vLineWidth: function (i:any, node:any) {
            return (i === 0 || i === node.table.widths.length) ? 2 : 2;
          },
          hLineColor: function (i:any, node:any) {
            return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
          },
          vLineColor: function (i:any, node:any) {
            return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
          }
        }
      },
     
    

      

    ],
 

    styles: {
      walkin:{
       margin:[0,10,0,0]
      },
      leftHeader:{
      fontSize:20,
      bold:true,
      alignment:'left'
      },
      header:{
        bold:true,
        alignment:'center'
      },
      headertitle1:{
        alignment:'left',
        bold:true
      },
      headertitle2:{
        alignment:'right',
        bold:true
      },
      header1:{
        alignment:'left'
      },
      header2:{
        alignment:'right'
      },
      content:{
        margin:[0,10,0,0],
        alignment:'center'
      },
      content1:{
        margin:[20,0,20,0],
        alignment:'center'
      },
      branch:{
        fontSize:20,

      },
      address:{
        fontSize:15,
        lineHeight:1,

      },
      mainheader:{
        fontSize:20,
        bold:true,
        margin:[0,10,0,0]
      }
    }
  };
   

   pdfMake.createPdf(this.docDefinition).download("test.pdf");
  // pdfMake.createPdf(this.docDefinition).open({}, window);
  pdfMake.createPdf(this.docDefinition).print();
}

public export1():void{
  this.printing= {
    pageSize: {
      width:200 ,
      height: 'auto'
    },
    pageMargins: [20, 40, 20, 90],
    content:[
        { qr: 'text in QR' }
      
    ]

  }
  pdfMake.createPdf(this.printing).print();
}


}
