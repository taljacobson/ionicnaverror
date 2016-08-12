import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {  withOutSelectorPage } from "../with-out-selector/with-out-selector";
import { withSelectorPage } from "../with-selector/with-selector";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }
  goToWithOut(){
    this.navCtrl.push(withOutSelectorPage)
  }
  goToWithSelector(){
    this.navCtrl.push(withSelectorPage)
  }
}
