import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChildPage } from '../childPage/childPage';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
   title : string = "bla";
   childPage = ChildPage;
  constructor(public navCtrl: NavController) {
    this.title = "nešto";
  }

  openChildPage(component)
  {
    this.navCtrl.push(component);
  }

  ionViewDidLoad()
  {
    console.log('Hello Repos Page');
  }
}
