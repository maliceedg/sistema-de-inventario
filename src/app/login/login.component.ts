import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'El campo no puede estar vacio';
    }

    return this.email.hasError('email') ? 'No es un correo válido' : '';
  }

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({      
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.loginForm.controls; }

  login(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();
  }
}
