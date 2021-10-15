import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(AppComponent, { injector: this.injector })
    customElements.define("my-element", element);
  }
}
