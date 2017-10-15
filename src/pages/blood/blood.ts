import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BloodlogPage } from '../bloodlog/bloodlog';
import { ProfilePage } from '../profile/profile';
import { BloodData } from '../../providers/blood-data';

/* FACEBOOK AUTH */
import { Facebook } from 'ionic-native';
import firebase from 'firebase';
/* END */

@Component({
  selector: 'page-blood',
  templateUrl: 'blood.html'
})
export class BloodPage {
    /* FACEBOOK AUTH */
    userProfile: any = null;
    /* END */
    
  constructor(public navCtrl: NavController /*, public bloodData: BloodData */) {
    /* this.navCtrl = navCtrl;
    this.bloodData = bloodData;

    this.bloodData.getBloodList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          bloodsugar: snap.val().bloodsugar,
          time: snap.val().time,
        });
      });
      this.bloodList = rawList;
    }); */
  }
  
  facebookLogin(){
    Facebook.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log("Firebase success: " + JSON.stringify(success));
            this.userProfile = success;
        })
        .catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
    }
  
bloodlog = BloodlogPage;
goToProfile = ProfilePage;

}