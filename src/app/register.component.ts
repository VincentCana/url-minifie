/**
 * Created by David Salmon on 20/03/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./app.component.css']
})
export class RegisterComponent{
  url = 'https://imie-api-mock.cleverapps.io/register';
  login = 'david.salmon@gmail.com';
  password = 'pass';
  confirmPassword = 'pass';
  errorMessage='';


  constructor(private http: Http,private router : Router) {}
  private headers = new Headers({'Content-Type': 'application/json'});

  onSubmit() : void{
    if(this.password !== this.confirmPassword)
      this.errorMessage = 'confirm Password Error';
    else
      this.errorMessage = '';



    this.http
      .post(this.url, JSON.stringify({
        email: this.login,
        password:this.password,
        'confirm-password' : this.confirmPassword
      }), {headers: this.headers})
      .toPromise()
      .then(res => {
        localStorage.setItem('user',res.json());
        //res.json().data;
        this.router.navigateByUrl('/dashboard');
      })
      .catch((e)=>{console.log(e)});
  }

}
