import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArchiveModule } from '@archive/archive.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { FileSpinnerModule } from '@shared/file-spinner/file-spinner.module';
import { HttpClientModule } from '@angular/common/http';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { NavigationModule } from './navigation/navigation.module';
import { NotificationsModule } from '@notifications/notifications.module';
import { RacesEffects } from '@scraper/store/races.effects';
import { ScraperModule } from '@scraper/scraper.module';
import { SideRailModule } from '@shared/siderail/side-rail.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { csrfTokenProvider } from '@shared/providers/csrf-token.provider';
import { getSaver, SAVER } from '@shared/providers/saver.provider';
import { httpErrorProvider } from '@shared/providers/http-error.provider';
import { isDevMode, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatSidenavModule, MatToolbarModule];

const STORE_MODULES = [
  EffectsModule.forRoot([RacesEffects]),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace: true,
    traceLimit: 75,
  }),
  StoreModule.forRoot(),
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
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MATERIAL_MODULES,
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
