import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { AppComponent } from './app.component';
import { LooginPageComponent } from './loogin-page/loogin-page.component';
import { RegisterFieldComponent } from './register-field/register-field.component';
import { MainComponent  } from './main/main.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { AddNewCardsComponent } from './add-new-cards/add-new-cards.component';
import { AboutComponent } from './about/about.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { MainGuard }   from './main.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'login', component: LooginPageComponent},
    {path:'', redirectTo:'login', pathMatch: 'full'},
    {path:'main', component: MainComponent, canActivate: [MainGuard]},
    {path:'cards/:id', component: CardInfoComponent, canActivate: [MainGuard]},
    {path:'cards', component: MyCardsComponent, canActivate: [MainGuard]},
    {path:'new-card', component: AddNewCardsComponent, canActivate: [MainGuard]},
    {path:'about', component: AboutComponent, canActivate: [MainGuard]},
    {path:'**', component: PageNotFoundComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
