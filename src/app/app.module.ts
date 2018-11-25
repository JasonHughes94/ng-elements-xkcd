import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { XkdcRetrieverService } from './services/xkdc-retriever.service';


import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    XkdcRetrieverService
  ],
  entryComponents: [AppComponent]
})

export class AppModule {

  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(AppComponent, this.injector);
    const el = createCustomElement(AppComponent, { injector, strategyFactory });
    customElements.define('xkdc-comic', el);
  }

  ngDoBootstrap() {}
}

