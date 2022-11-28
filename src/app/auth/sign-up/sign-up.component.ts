import { Component, OnInit } from '@angular/core';
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

interface formDataInterface {
  email: string;
  phone_number: string;
  [key: string]: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  email: string = '';
  mobileNo: string = '';
  password: string = '';
  confirm_password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    var poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId,
    };

    var userPool = new CognitoUserPool(poolData);

    var attributeList = [];

    let formData: formDataInterface = {
      email: this.email,
      phone_number: this.mobileNo,
      'custom:confirm_password': this.confirm_password,
    };

    for (let key in formData) {
      let attrData = {
        Name: key,
        Value: formData[key],
      };
      console.log(attrData);
      let attribute = new CognitoUserAttribute(attrData);
      attributeList.push(attribute);
    }

    console.log(attributeList);
    userPool.signUp(
      this.email,
      this.password,
      attributeList,
      [],
      (err, result) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        window.location.assign(environment.loginURL);
      }
    );
  }
}
