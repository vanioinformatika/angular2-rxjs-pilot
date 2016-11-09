import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [ AuthService ],
    styles: []
  }
)
export class LoginComponent {

  email:FormControl = new FormControl();
  password:FormControl = new FormControl();

  constructor(private authService:AuthService){ }

  loginButtonHandler(event){
    this.requestLogin();
  }

  private requestLogin(){
    console.log("Login:", this.email.value, this.password.value);
    let creds = {
      email: this.email.value,
      password: this.password.value
    }
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    let options = new RequestOptions(
      {
        headers: headers,
        body: JSON.stringify(creds)
      }
    );

    this.authService.requestLogin('/login', options)
      .subscribe(
        (data) => {
          console.log("JWT:", data);
        },
        (err)=>{
          console.log(err);
        },
        ()=>console.log("Done")
      );
  }
}
