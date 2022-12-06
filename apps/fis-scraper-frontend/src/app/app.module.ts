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
import { SiderailModule } from '@shared/siderail/siderail.module';
import { csrfTokenProvider } from '@shared/providers/csrf-token.provider';
import { foldersReducer } from '@shared/state/folders.reducer';
import { getSaver, SAVER } from '@shared/providers/saver.provider';
import { httpErrorProvider } from '@shared/providers/http-error.provider';
import { navMenuReducer } from '@shared/state/nav-menu.reducer';
import { notificationsReducer } from '@shared/state/notifications.reducer';
import { raceDetailsReducer } from '@shared/state/raceDetails.reducer';
import { racesReducer } from '@shared/state/races.reducer';
import { sideRailStateReducer } from '@shared/state/siderail.reducer';
import { spinnerReducer } from '@shared/state/spinner.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FileSpinnerModule,
    HttpClientModule,
    NotificationsModule,
    StoreModule.forRoot(
      {
        folders: foldersReducer,
        navMenu: navMenuReducer,
        notifications: notificationsReducer,
        raceDetails: raceDetailsReducer,
        races: racesReducer,
        spinner: spinnerReducer,
        sideRail: sideRailStateReducer,
      },
      {}
    ),
    ScraperModule,
    SiderailModule,
    NavigationModule,
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
