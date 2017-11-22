import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';

import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LooginPageComponent } from './loogin-page/loogin-page.component';
import { RegisterFieldComponent } from './register-field/register-field.component';
import { MainComponent  } from './main/main.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { AddNewCardsComponent } from './add-new-cards/add-new-cards.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    LooginPageComponent,
    RegisterFieldComponent,
    PageNotFoundComponent,
    MainComponent,
    MyCardsComponent,
    AddNewCardsComponent,
    AboutComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
