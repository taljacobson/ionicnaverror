import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'withselector',
  templateUrl: 'build/pages/with-selector/with-selector.html'
})
export class withSelectorPage {
  constructor(private navCtrl: NavController) {
    console.log("with selector");
  }
}
