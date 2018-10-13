import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      title: "Bem-vindo ao The Movie Db!",
      description: "O <b>The Movie Db</b> apresenta várias informações de filmes e séries.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "O que é TMDb?",
      description: "O <b>Banco de Dados de Filmes(TMDb)</b> é um banco de dados de TV e filmes criados pela comunidade.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  irParaPagina() {
    this.navCtrl.push(TabsPage);
  }

}
