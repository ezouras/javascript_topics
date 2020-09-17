import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material.module";
import { MatTreeModule } from '@angular/material/tree';

import { AppComponent } from './app.component';
import { TreeWithPaginatorComponent } from './tree-with-paginator/tree-with-paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TreeWithPaginatorComponent
  ],
  imports: [
    BrowserModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
