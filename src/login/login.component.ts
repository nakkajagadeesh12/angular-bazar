import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  text: string = "Login Here";
  isValid: boolean = false;
  userLogin: any;
  loginTo:boolean=true;
  constructor(private formBuilder: FormBuilder) {
    this.userLogin = this.formBuilder.group({
      name: [''],
      pwd: [''],
    })
  }

  ngOnInit() {
  }
  login() {
    if (this.userLogin) {
      this.isValid = true;
      this.loginTo=false;
    }
  }

}