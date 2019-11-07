import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies:any;
  constructor(public navCtrl: NavController,
              public http: HttpClient) {
    this.http.get('/peliculas/peliculas/')
      .subscribe(data => {
        this.movies = data;
        console.log(JSON.stringify(data));
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

}
