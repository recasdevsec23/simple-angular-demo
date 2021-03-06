import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { HeadingComponent } from './heading/heading.component'; 
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    HeadingComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
