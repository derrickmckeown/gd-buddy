import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodlogPage } from '../foodlog/foodlog';

@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class FoodPage {
  constructor(public navCtrl: NavController) {
  }
  
  foodlog = FoodlogPage;
}