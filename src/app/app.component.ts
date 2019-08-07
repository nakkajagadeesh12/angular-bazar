import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Enter the Personal Details';
  userData: any;
  isRegister: boolean = true;
  isLogin: boolean = false;
  constructor(private fb: FormBuilder) {
    this.userData = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      pwd: [''],
    })
  }
  check() {
    if (this.userData) {
      console.log(this.userData.value, "uer");
      window.alert("Details submitted");
      this.isRegister = false;
      this.isLogin = true;
    }
  }

}
