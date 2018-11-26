import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:Observable;
  constructor(private http:HttpClient){

  }

  onClick(){
    this.data =this.http.get('https://jsonplaceholder.typicode.com/posts');
  }







}
