import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GreetComponent } from './views/greet/greet.component';
import { NewsComponent } from './views/news/news.component';
import { AboutComponent } from './views/about/about.component';
import { TripsComponent } from './views/trips/trips.component';
import { TripFormComponent } from './views/trip-form/trip-form.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'greet' },
  {
    path: '', component: MainComponent,
    children: [
      { path: 'greet', component: GreetComponent },
      { path: 'news', component: NewsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'trips', component: TripsComponent },
      { path: 'trip-form', component: TripFormComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: '**', redirectTo: 'greet', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
