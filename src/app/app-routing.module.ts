import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinComponent } from './appoin/appoin.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path : "" , component:HomeComponent},
  {path : "appoin" , component:AppoinComponent},
  {path : "sideBar" , component:SideBarComponent},
  {path : "signup" , component:SignupComponent},
  {path : "login" , component:LoginComponent},
  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
