import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent} from './register.component';
import { AuthentificationComponent } from './authentification.component';
import { DashboardComponent } from './dashboard.component';
import {Routes, RouterModule} from "@angular/router";


const appRoutes: Routes = [
  {path: '', redirectTo: '/register',pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: AuthentificationComponent },
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthentificationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
