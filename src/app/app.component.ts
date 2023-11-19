import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../validator/compare/compare.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ConfirmEqualValidatorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  _http !: HttpClient;
  constructor(http: HttpClient) {
    // https://jsonplaceholder.typicode.com/users
    this._http = http;
  }

  title = 'music-store-stanalone';
  users!: Observable<any[]>;

  time = "2023-11-18T17:19:19.329Z"

  ngOnInit() {
    this.users = this._http.get<any[]>("https://jsonplaceholder.typicode.com/users")
  }

}