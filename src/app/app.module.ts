import { BrowserModule, NgModule, FormsModule, RouterModule, AppRoutingModule} from './barrel';
import { HttpClientModule }    from '@angular/common/http';


import { PageNotFoundComponent, AppComponent, LooginPageComponent, RegisterFieldComponent, MainComponent, MyCardsComponent, AddNewCardsComponent, AboutComponent } from './barrel';
import { LoginService } from './login.Service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardsService } from './cards.service';
import { MainGuard } from './main.guard';



@NgModule({
  declarations: [
    AppComponent,
    LooginPageComponent,
    RegisterFieldComponent,
    PageNotFoundComponent,
    MainComponent,
    MyCardsComponent,
    AddNewCardsComponent,
    AboutComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ LoginService, CardsService, MainGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
