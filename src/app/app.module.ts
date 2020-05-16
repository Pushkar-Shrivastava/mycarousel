import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycarouselComponent } from './mycarousel/mycarousel.component';
import { OwlcarouselComponent } from './owlcarousel/owlcarousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MycarouselComponent,
    OwlcarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
