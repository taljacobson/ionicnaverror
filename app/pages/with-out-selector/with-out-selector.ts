import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/with-out-selector/with-out-selector.html'
})
export class withOutSelectorPage {
  constructor(private navCtrl: NavController) {
    console.log("with out selector");
  }
}
