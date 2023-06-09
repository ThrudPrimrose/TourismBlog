import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GreetComponent } from './views/greet/greet.component';
import { AboutComponent } from './views/about/about.component';
import { TripsComponent } from './views/trips/trips.component';
import { ContactComponent } from './views/contact/contact.component';
import { DisclaimerComponent } from './views/disclaimer/disclaimer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: '', component: MainComponent,
    children: [
      { path: 'home', component: GreetComponent },
      { path: 'about', component: AboutComponent },
      { path: 'trips', component: TripsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'disclaimer', component: DisclaimerComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
