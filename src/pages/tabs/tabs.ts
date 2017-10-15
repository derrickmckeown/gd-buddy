import { Component } from '@angular/core';
import { BloodPage } from '../blood/blood';
import { FoodPage } from '../food/food';
import { MedicinePage } from '../medicine/medicine';
import { ExercisePage } from '../exercise/exercise';
import { TimelinePage } from '../timeline/timeline';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BloodPage;
  tab2Root: any = FoodPage;
  tab3Root: any = MedicinePage;
  tab4Root: any = ExercisePage;
  tab5Root: any = TimelinePage;

  constructor() {

  }
}