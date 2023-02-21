import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  SignupForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder , private router:Router ,private userService:UserService){
    this.SignupForm = this.formBuilder.group({
      fname:['',[Validators.required, Validators.minLength(5)]],
      lname:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,
      Validators.minLength(8)]],
    })
  }
  ngOnInit(): void {

  }
signUp(){
this.submitted = true;
if(this.SignupForm.invalid){
return
}else{
this.userService.signup(this.SignupForm.value).subscribe((res)=>{
alert("user register sucessfull");
this.SignupForm.reset();
})
    }
  }
    public hasError = (controlName: string, errorName: string) => {
      return this.SignupForm.controls[controlName].hasError(errorName);
    }
}
