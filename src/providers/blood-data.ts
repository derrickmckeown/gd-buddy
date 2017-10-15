import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class BloodData {
  public userProfile: any;
  public currentUser: any;
  /* public profilePictureRef: any; */

  constructor() {
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/userProfile');
    /* this.profilePictureRef = firebase.storage().ref('/guestProfile/'); */
  }
  
  getUserProfile(): any {
    return this.userProfile.child(this.currentUser.uid);
  }

  updateBlood(bloodSugarLevel: string, time: string): any {
    return this.userProfile.child(this.currentUser.uid).child("user").child("blood").update({
        bloodSugarLevel: bloodSugarLevel,
        time: time
    });
  }

}