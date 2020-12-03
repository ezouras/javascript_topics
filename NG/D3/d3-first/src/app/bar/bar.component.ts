import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  private data = [
    { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
    { "Framework": "React", "Stars": "150793", "Released": "2013" },
    { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
    { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
    { "Framework": "Ember", "Stars": "21471", "Released": "2011" },
  ];
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);//650
  private height = 400 - (this.margin * 2);//300

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);

  }

  private createSvg() {
    this.svg = d3.select('figure#bar')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    //.attr("transform", "translate(50,50)");
    //transform moves it x,y so 50px to the right, and 50 pixels down
  }

  private drawBars(data: any[]) {
    //Create x axis band scale
    const x = d3.scaleBand()
      .range([0, this.width]) //total width of all the bars
      .domain(data.map(d => d.Framework)) //the framework value will represent each bar
      .padding(0.2); //space between each bar by percentage. so 1 is 100% and you wont see bars
    //.padding(0.9)

    //Draw the x axis on the dom
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    //Create y axis band scale
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);

    //Draw the y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    //create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => x(d.Framework))
      .attr("y", d => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d) => this.height - y(d.Stars))
      .attr("fill", "#d04a35");
  }




}
