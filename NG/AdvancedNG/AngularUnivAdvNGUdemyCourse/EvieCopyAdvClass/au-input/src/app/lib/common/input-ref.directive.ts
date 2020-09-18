import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'app-au-fa-input input' //us on any nested input in font awesome comp
})

//this class name is what is used in the content child
export class InputRefDirective {
  focus = false;

  constructor() { }

  //listen to the native "focus" event of the dom input element
  @HostListener("focus")
  onFocus() {
    this.focus = true
  }

  @HostListener("blur")
  onBlur() {
    this.focus = false
  }

}
