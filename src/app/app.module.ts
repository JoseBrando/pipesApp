import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules PrimeNG
import { ButtonModule } from 'primeng/button';

// Components
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
