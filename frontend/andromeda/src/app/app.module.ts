import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnHomeComponent } from './an--home/an--home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AnParallaxComponent } from './_ui/an--parallax/an--parallax.component';
import { AnHeaderComponent } from './an--header/an--header.component';

@NgModule({
  declarations: [
    AppComponent,
    AnHomeComponent,
    AnParallaxComponent,
    AnHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
