import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Posts1Component } from './shared/components/posts1/posts1.component';
import { Posts2Component } from './shared/components/posts2/posts2.component';

@NgModule({
  declarations: [
    AppComponent,
    Posts2Component,
    Posts1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
