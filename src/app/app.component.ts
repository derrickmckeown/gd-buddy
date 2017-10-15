import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    //rootPage = TabsPage;
    rootPage: any;
    zone: NgZone;
    
    constructor(platform: Platform) {
        this.zone = new NgZone({});
        firebase.initializeApp({
            apiKey: "AIzaSyBDz-G6xSlc6kpubA4ttpZyADzS2JxzNQc",
            authDomain: "gd-buddy.firebaseapp.com",
            databaseURL: "https://gd-buddy.firebaseio.com",
            storageBucket: "gd-buddy.appspot.com",
            messagingSenderId: "1070050510336"
        });
        
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          this.zone.run( () => {
            if (!user) {
              this.rootPage = LoginPage;
              unsubscribe();
            } else { 
              this.rootPage = TabsPage;
              unsubscribe();
            }
          });     
        });

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}