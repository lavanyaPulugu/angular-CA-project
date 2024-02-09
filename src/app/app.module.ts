import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './pages/header/header.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ChooseMeComponent } from './pages/choose-me/choose-me.component';
import { FooterComponent } from './pages/footer/footer.component';
import { QuoteComponent } from './pages/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    AboutComponent,
    HomeComponent,
    ChooseMeComponent,
    FooterComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
