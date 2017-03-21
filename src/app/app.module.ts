import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent} from './register.component';
import { AuthentificationComponent } from './authentification.component';
import {Routes, RouterModule} from "@angular/router";


const appRoutes: Routes = [
  {path: '', redirectTo: '/register',pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AuthentificationComponent]
})
export class AppModule { }
