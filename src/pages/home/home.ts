import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {MoviePage} from "../movie/movie";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies:any;
  moviePage = MoviePage;

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

  clickAdd() {
    console.log('clickAdd');
    this.navCtrl.push(this.moviePage);
  }

}
