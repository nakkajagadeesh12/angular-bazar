import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
