import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GreetComponent } from './views/greet/greet.component';
import { AboutComponent } from './views/about/about.component';
import { NewsComponent } from './views/news/news.component';
import { TripsComponent } from './views/trips/trips.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderModule } from '@coreui/angular';
import { DropdownModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { NavModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NavbarModule } from '@coreui/angular';
import { CollapseModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from '@coreui/angular';
import { ButtonGroupModule } from '@coreui/angular';
import { CarouselModule } from '@coreui/angular';
import { CardModule } from '@coreui/angular';
import { TripFormComponent } from './views/trip-form/trip-form.component';
import { ContactComponent } from './views/contact/contact.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GreetComponent,
    AboutComponent,
    NewsComponent,
    TripsComponent,
    TripFormComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    HttpClientModule,
    HeaderModule,
    DropdownModule,
    GridModule,
    NavModule,
    IconModule,
    NavbarModule,
    CollapseModule,
    BrowserAnimationsModule,
    ButtonModule,
    ButtonGroupModule,
    CarouselModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
