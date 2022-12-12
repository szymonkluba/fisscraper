import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FileSpinnerModule } from '@shared/file-spinner/file-spinner.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsModule } from '@notifications/notifications.module';
import { StoreModule } from '@ngrx/store';

import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { NavigationModule } from './navigation/navigation.module';
import { ScraperModule } from '@scraper/scraper.module';
import { SideRailModule } from '@shared/siderail/side-rail.module';
import { csrfTokenProvider } from '@shared/providers/csrf-token.provider';
import { getSaver, SAVER } from '@shared/providers/saver.provider';
import { httpErrorProvider } from '@shared/providers/http-error.provider';
import { raceDetailsReducer } from '@store/raceDetails.reducer';
import { racesReducer } from '@store/races.reducer';
import { spinnerReducer } from '@store/spinner.reducer';
import { ArchiveModule } from '@archive/archive.module';

const STORE_MODULES = [
  StoreModule.forRoot(
    {
      raceDetails: raceDetailsReducer,
      races: racesReducer,
      spinner: spinnerReducer,
    },
    {}
  ),
];

const APP_MODULES = [
  ArchiveModule,
  FileSpinnerModule,
  NavigationModule,
  ScraperModule,
  SideRailModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    APP_MODULES,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NotificationsModule,
    STORE_MODULES,
  ],
  providers: [
    csrfTokenProvider,
    httpErrorProvider,
    { provide: SAVER, useFactory: getSaver },
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        showDelay: 500,
        hideDelay: 200,
        touchendHideDelay: 200,
        position: 'after',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
