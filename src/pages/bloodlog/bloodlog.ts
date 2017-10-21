import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
// import { ProfilePage } from '../profile/profile';
import { BloodPage } from '../blood/blood';
import { BloodData } from '../../providers/blood-data';

// PAGE JS
var d = new Date(); 
var y = d.getFullYear(); 
alert(y);

// COMPONENT
@Component({
  selector: 'page-bloodlog',
  templateUrl: 'bloodlog.html'
})
export class BloodlogPage {
  constructor(public navCtrl: NavController, public bloodData: BloodData) {
    this.navCtrl = navCtrl;
    this.bloodData = bloodData;
  }
  
  updateBlood(bloodSugar: string, bloodTime: string) {
    this.bloodData.updateBlood(bloodSugar, bloodTime).then( () => {
      this.navCtrl.pop();
    });
  }
  
  blood = BloodPage;
}
