import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeComponent } from './home/home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    SlickCarouselModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
