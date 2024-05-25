import { Component } from '@angular/core';
import { User } from '../types/user';
import { Doctor } from '../types/doctor';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResp } from '../authResp';
import { AuthService } from '../auth.service';
import { specialite } from '../types/specialite';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] 
})
export class SignupComponent {
  specialite!: specialite; 
  specialites!: specialite[]; 

  constructor(private authService: AuthService, private router: Router) {}

  GoToAppoint() {
    this.router.navigate(['/appoin']);
  }

  public createCmpt(signupForm: NgForm): void {
    const authUser: User<Doctor> = {
      role: "Doctor",
      password: signupForm.value.password,
      name: signupForm.value.lastname,
      _id: '0',
      firstname: signupForm.value.firstname,
      lastname: signupForm.value.lastname,
      tel: signupForm.value.phonenumber,
      email: signupForm.value.userName,
      details: {
        description: "signupForm.value.Description",
        speciality: 1,
      } 
    };

    this.authService.register(authUser).subscribe(
      (response: AuthResp) => {
        console.log(response);
        this.GoToAppoint()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
