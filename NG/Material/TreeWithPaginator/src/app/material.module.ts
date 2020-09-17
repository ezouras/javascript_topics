import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: []
})

export class MaterialModule { }
