import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//import {AuInputModule} from "./lib/au-input.module";
import { HttpClientModule } from "@angular/common/http";
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';



@NgModule({
  declarations: [
    AppComponent,
    AuFaInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AuInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
