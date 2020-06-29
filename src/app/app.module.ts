import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { AccordionModule } from "primeng/accordion";

import { AppComponent } from "./app.component";
import { EgzaminComponent } from "./egzamin/egzamin.component";
import { PytanieComponent } from "./pytanie/pytanie.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, EgzaminComponent, PytanieComponent, LoginComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
