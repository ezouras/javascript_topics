import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ng add @angular/material
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
