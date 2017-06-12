import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LinechartComponent implements OnInit {
   @ViewChild('linechart') private linechartContainer: ElementRef;
  private Stocks: Stock[] = [
  {date: new Date("2012-02-16"), value: 150.01},
  {date: new Date("2013-02-27"), value: 240.9},
  {date: new Date("2014-03-06"), value: 330.26},
  {date: new Date("2015-03-14"), value: 589.58},
  {date: new Date("2015-03-16"), value: 450.57},
  {date: new Date("2016-03-27"), value: 590.48},
  {date: new Date("2016-03-28"), value: 580.62},
  {date: new Date("2016-03-29"), value: 450.86},
  {date: new Date("2016-03-30"), value: 395.55},
  {date: new Date("2017-04-11"), value: 337.20}
];
  private margin = {top: 20, right: 20, bottom: 20, left: 30};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private chart: any;
  private line: d3.Line<[number, number]>;

  constructor() {
    
  }

  ngOnInit() {
    this.initSvg()
    this.initAxis();
    this.drawAxis();
    this.drawLine(); 
  }
 
  private initSvg() {
    let element = this.linechartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right ;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    //viewbox is use to make svg responsive
    //preserveAspectRatio attribute IE needs a little more guidance 
    this.svg = d3.select(element).append("svg")
                  .attr('viewBox', '-30 -20 430 330')
                  .attr('preserveAspectRatio','xMidYMin slice');
                 
    this.chart = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');               
                 
  }

  private initAxis() {
    this.x = d3.scaleTime().range([0, this.width]);
    this.y = d3.scaleLinear().range([this.height, 0]);
    this.x.domain(d3.extent(this.Stocks, (d) => d.date ));
    this.y.domain([0, d3.max(this.Stocks, (d) => d.value )]);
  }

  private drawAxis() {
 
    this.chart.append("g")
          .attr("class", "axis axis--x")
          .attr('transform', 'translate(0, ' + this.height + ')')
          .call(d3.axisBottom(this.x).ticks(6));

     this.chart.append("g")
          .attr("class", "axis axis--y")
          .call(d3.axisLeft(this.y).ticks(6));
  }

  private drawLine() {
    this.line = d3.line()
                       .x( (d: any) => this.x(d.date) )
                       .y( (d: any) => this.y(d.value) )
                       .curve(d3.curveMonotoneX);

    this.chart.append("path")
            .data([this.Stocks])
            .attr("class", "line")
            .attr("d", this.line)
            
  }

}

export interface Stock {
  date: Date,
  value: number
}


