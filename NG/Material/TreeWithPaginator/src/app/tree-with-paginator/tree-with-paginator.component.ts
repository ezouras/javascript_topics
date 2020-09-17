import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-with-paginator',
  templateUrl: './tree-with-paginator.component.html',
  styleUrls: ['./tree-with-paginator.component.css']
})
export class TreeWithPaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filterChanged(event) {
    console.log("event is ", event)
  }

}
