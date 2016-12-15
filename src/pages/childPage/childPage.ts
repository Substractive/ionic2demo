import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-childPage',
  templateUrl: 'childPage.html'
})
export class ChildPage {

    constructor(public navCtrl: NavController)
    {
        console.log("child page constructed");
    }

    goBack()
    {
        this.navCtrl.pop();
        console.log("go back");
    }

}