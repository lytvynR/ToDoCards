import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LooginPageComponent } from './loogin-page/loogin-page.component';
import { RegisterFieldComponent } from './register-field/register-field.component';

@NgModule({
  declarations: [
    AppComponent,
    LooginPageComponent,
    RegisterFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
