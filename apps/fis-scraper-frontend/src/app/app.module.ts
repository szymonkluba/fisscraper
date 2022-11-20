import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsModule } from './notifications/notifications.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { racesReducer } from './state/races.reducer';
import { foldersReducer } from './state/folders.reducer';
import { getSaver, SAVER } from './providers/saver.provider';
import { notificationsReducer } from './state/notifications.reducer';
import { raceDetailsReducer } from './state/raceDetails.reducer';
import { spinnerReducer } from './state/spinner.reducer';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { csrfTokenProvider } from './providers/csrf-token.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NotificationsModule,
    StoreModule.forRoot(
      {
        races: racesReducer,
        raceDetails: raceDetailsReducer,
        folders: foldersReducer,
        notifications: notificationsReducer,
        spinner: spinnerReducer,
      },
      {}
    ),
  ],
  providers: [
    csrfTokenProvider,
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
