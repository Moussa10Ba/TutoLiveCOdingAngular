import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListeBienComponent } from './biens/liste-bien/liste-bien.component';
import { ItemBienComponent } from './biens/liste-bien/item-bien/item-bien.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListeBienComponent,
    ItemBienComponent,
    JumbotronBienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
