import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

const API_BASE_URL = "https://imie-api-mock.cleverapps.io";

@Component({
  selector: 'app-root',
  templateUrl: './authentification.component.html',
  styleUrls: ['./app.component.css']
})
export class AuthentificationComponent {
  constructor(private http: Http, private router: Router){}
  title = 'Authentification';

  email = '';
  password = '';
  errorMessage = "";

  onSubmit() {
    if (this.email === '' && this.password === '') {
      this.errorMessage = "Le courriel et le mot de passe sont vide";
    }
    else if (this.email === '' && this.password !== '') {
      this.errorMessage = "Le courriel est vide";
    }
    else if (this.email !== '' && this.password === '') {
      this.errorMessage = "Le mot de passe est vide";
    }
    else {
      this.login();
    }
  }

  login() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ headers: headers });

    this
      .http
      .post(`${API_BASE_URL}/connect`, { email: this.email, password: this.password }, requestOptions)
      .toPromise()
      .then(res => res.json())
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/dashboard');
      })
      .catch((res) => {
        const message = res.json().message;
        this.errorMessage = message;
      });
  }
}
