import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppoinComponent } from './appoin/appoin.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown'; 
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    AppoinComponent,
    SideBarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule, 
    SidebarModule,
    TableModule,
    FormsModule, 
    HttpClientModule,
    MessagesModule,
    DropdownModule,
    ReactiveFormsModule
    
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
