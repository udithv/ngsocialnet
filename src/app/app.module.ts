import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchpeopleComponent } from './components/searchpeople/searchpeople.component';
import { FriendsComponent } from './components/friends/friends.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FriendsService } from './services/friends.service';
import { AuthGuard } from './guards/auth.guard';
import 'materialize-css';


const appRoutes: Routes = [
      {path:'', component: HomeComponent},
      {path:'register', component: RegisterComponent},
      {path:'login', component: LoginComponent},
      {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
      {path:'profile', component: ProfileComponent,canActivate:[AuthGuard]},
      {path:'**', redirectTo: ''}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    SearchpeopleComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService,
    FriendsService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
