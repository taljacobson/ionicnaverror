# ionicnaverror
reproduce error then nav change on ionic 2 to component with a selector

steps to repreduce
create  a new ionic 2 project or clone this repo.
`ionic start <project-name>`

create a new component page,

```javascript
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

```

link to it with a button or other element on a perent page
```html
<button type="button" (click)="goToWithSelector()" block>with selector</button>

```
import the component with selector to the perent page

```javascript
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { withSelectorPage } from "../with-selector/with-selector";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }

  goToWithSelector(){
    this.navCtrl.push(withSelectorPage)
  }
}
```

`ionic serve` 

