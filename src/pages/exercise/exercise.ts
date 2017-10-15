import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExerciselogPage } from '../exerciselog/exerciselog';

@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html'
})
export class ExercisePage {
  constructor(public navCtrl: NavController) {
  }
  
  exerciselog = ExerciselogPage;
}