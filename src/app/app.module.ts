import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DevelopmentComponent } from './development/development.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    DevelopmentComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
