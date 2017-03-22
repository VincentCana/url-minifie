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
    email = '';
    password = '';
    confirmPassword = '';
    errorMessage='';


    constructor(private http: Http,private router : Router) {}
    private headers = new Headers({'Content-Type': 'application/json'});

    onSubmit() : void{
      let error = false;
      console.log(this.email);
      if(this.email === '')
        this.errorMessage = 'email is empty';
      else if(this.password === '')
        this.errorMessage = 'password is empty';
      else if(this.password !== this.confirmPassword)
        this.errorMessage = 'confirm Password Error';
      else {


          this.errorMessage = '';
          this.http
            .post(this.url, JSON.stringify({
              email: this.email,
              password: this.password,
              'confirm-password': this.confirmPassword
            }), {headers: this.headers})
            .toPromise()
            .then(res => {
              localStorage.setItem('user', res.json());
              //res.json().data;
              this.router.navigateByUrl('/dashboard');
            })
            .catch((e)=> {
              console.log(e)
            });

      }
    }

  }
