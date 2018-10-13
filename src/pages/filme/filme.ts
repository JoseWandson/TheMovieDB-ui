import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FilmeProvider } from '../../providers/filme/filme';

/**
 * Generated class for the FilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme',
  templateUrl: 'filme.html',

  providers: [
    FilmeProvider
  ]
})
export class FilmePage {

  public listaFilmes = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private filmeProvider: FilmeProvider) {
  }

  ionViewDidLoad() {
    this.filmeProvider.getPopular().subscribe(
      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);

        this.listaFilmes = obj.results;
      },
      error => {
        console.error(error);
      }
    )
  }

}
