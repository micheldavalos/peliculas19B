import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  title = "";
  rate = 1;
  director = "";
  distributor = "";
  image = "";
  year = 2019;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }

  addMovie() {
    console.log('addMovie');

    const movie = {
      title: this.title,
      director: this.director,
      distributor: this.distributor,
      rate: this.rate,
      imagen: this.image,
      year: this.year
    };
    console.log(JSON.stringify(movie));

    this.http.post('/peliculas/peliculas/', movie)
      .subscribe(data => {
        console.log(JSON.stringify(data));
        this.navCtrl.pop();
      }, error => {
        console.log(JSON.stringify(error));
        this.navCtrl.pop();
      });
  }
}
