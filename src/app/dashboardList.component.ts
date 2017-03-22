import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const API_BASE_URL = "https://imie-api-mock.cleverapps.io";

@Component({
  selector: 'dashboard-list',
  templateUrl: './dashboardList.component.html',
  styleUrls: ['./app.component.css']
})
export class DashboardListComponent {
  constructor(private http: Http){};

  urls = localStorage.getItem('urls') || [{url: "test.com", urlMinifie: "b.com"}];

  deleteUrl(event, url) {
    this
      .http
      .delete(`${API_BASE_URL}/urls/${encodeURIComponent(url.url)}`, {})
      .toPromise()
      .then(() => console.log("done"))
      .catch(e => console.error(e));

  }
}
