import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  _http !: HttpClient ;
  constructor(http: HttpClient){
      // https://jsonplaceholder.typicode.com/users
      this._http = http;
  }

  title = 'music-store-stanalone';
  users!: Observable<any[]>;

  ngOnInit(){
    this.users = this._http.get<any[]>("https://jsonplaceholder.typicode.com/users")
  }
  
}