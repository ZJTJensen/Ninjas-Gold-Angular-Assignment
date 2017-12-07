import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { LogComponent } from './log/log.component';

import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
