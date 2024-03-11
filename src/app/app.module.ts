import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HomeIntermediateComponent } from './home-intermediate/home-intermediate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraLateralComponent,
    HomeComponent,
    RegisterComponent,
    HomeIntermediateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
