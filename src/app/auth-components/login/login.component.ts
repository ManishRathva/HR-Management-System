import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  submitted = false;
  constructor (private formBuilder:FormBuilder , private router:Router){
    this.loginForm = this.formBuilder.group({
      email :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,
      Validators.minLength(8)]
    ],
    });
  }
  ngOnInit(): void {

  }
  login(){

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
}
