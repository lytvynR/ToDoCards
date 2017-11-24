import { BrowserModule, NgModule, FormsModule, RouterModule, HttpModule, AppRoutingModule} from './barrel';

import { PageNotFoundComponent, AppComponent, LooginPageComponent, RegisterFieldComponent, MainComponent, MyCardsComponent, AddNewCardsComponent, AboutComponent } from './barrel';
import { LoginService } from './Login.Service';
import { LoginGuard } from './loginGuard';




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
  providers: [ LoginService, LoginGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
