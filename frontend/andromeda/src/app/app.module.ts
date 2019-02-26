import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnHomeComponent } from './an--home/an--home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AnParallaxComponent } from './_ui/an--parallax/an--parallax.component';
import { AnBandListComponent } from './an--band-list/an--band-list.component';
import { BandService } from './_services/an--band/an--band.service';
import { HttpClientModule } from '@angular/common/http';
import { AnHeaderComponent } from './an--header/an--header.component';
import { AnCdListComponent } from './an--cd-list/an--cd-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnHomeComponent,
    AnParallaxComponent,
    AnBandListComponent,
    AnHeaderComponent,
    AnCdListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    BandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
