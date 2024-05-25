import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }

  GoToAppoint() {
    this.router.navigate(['/appoin']);
  }
  formGroup!: FormGroup;

login() {
throw new Error('Method not implemented.');
}
reset() {
throw new Error('Method not implemented.');
}
signup() {
throw new Error('Method not implemented.');
}

}
