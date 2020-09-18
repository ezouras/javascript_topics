import { Component, Input, OnInit, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from "./../common/input-ref.directive";

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit {
  @Input()
  icon: string;

  /*
  instead of using #input in the parent every time,
  we are going to use a directive (see below), instead

  @ContentChild("input", { static: false })
  input: HTMLInputElement;
  */

  // this is a reference to the DIRECTIVE that is referencing the dom element
  @ContentChild(InputRefDirective, { static: false })
  input: InputRefDirective


  constructor() { }

  ngOnInit(): void {
  }

  /*
  ngClass in the template takes an object
  if the value for the property is true,
  then you set class to that value
  for example - class="fa" everytime
  The reason for this is so that instead of true,
  you can add some condition that can make the
  class dependent on something
  */
  get classes() {
    const cssClasses = {
      //'fa': true, we added thsi to template class directly
    }
    if (this.icon) {
      cssClasses["fa-" + this.icon] = true;
    }
    return cssClasses
  }

  ngAfterContentInit() {
    if (!this.input) {
      console.error("the au-fa-input needs an input ")
    }
  }

  @HostBinding('class.input-focus')
  //get youCanCallMeAnythingAndIWillGetCalled() {
  get inputFocus() {
    return this.input ? this.input.focus : false;
  }

}
