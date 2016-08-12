import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'otherpage',
  templateUrl: 'build/pages/otherpage/otherpage.html'
})
export class withSelectorPage {
  constructor(private navCtrl: NavController) {
    console.log("with selector");
  }
}
