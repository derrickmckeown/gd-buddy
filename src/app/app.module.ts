import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';

import { BloodPage } from '../pages/blood/blood';
import { BloodlogPage } from '../pages/bloodlog/bloodlog';
import { FoodPage } from '../pages/food/food';
import { FoodlogPage } from '../pages/foodlog/foodlog';
import { MedicinePage } from '../pages/medicine/medicine';
import { MedicinelogPage } from '../pages/medicinelog/medicinelog';
import { ExercisePage } from '../pages/exercise/exercise';
import { ExerciselogPage } from '../pages/exerciselog/exerciselog';
import { TimelinePage } from '../pages/timeline/timeline';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ProfilePage } from '../pages/profile/profile';

import { AuthData } from '../providers/auth-data';
import { ProfileData } from '../providers/profile-data';
import { BloodData } from '../providers/blood-data';

/* CLOUD SETTINGS */
/* const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b4de553a'
  }
}; */

@NgModule({
  declarations: [
    MyApp,
    BloodPage,
    FoodPage,
    MedicinePage,
    ExercisePage,
    TimelinePage,
    BloodlogPage,
    FoodlogPage,
    MedicinelogPage,
    ExerciselogPage,
    TabsPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    //CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BloodPage,
    FoodPage,
    MedicinePage,
    ExercisePage,
    TimelinePage,
    BloodlogPage,
    FoodlogPage,
    MedicinelogPage,
    ExerciselogPage,
    TabsPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    ProfilePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AuthData,
    ProfileData,
    BloodData
  ]
})

export class AppModule {}