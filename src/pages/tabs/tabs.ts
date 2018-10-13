import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FilmePage } from '../filme/filme';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmePage;

  constructor() {

  }
}
