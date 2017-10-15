import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedicinelogPage } from '../medicinelog/medicinelog';

@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html'
})
export class MedicinePage {
  constructor(public navCtrl: NavController) {
  }
  
  medicinelog = MedicinelogPage;
}