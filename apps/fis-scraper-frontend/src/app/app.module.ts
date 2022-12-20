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
import { Feature } from '@constants/store_constants';
import {
  NavigationActionTiming,
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { RoutingSerializer } from '@store/routing/routing.serializer';
import {
  ROUTING_CONFIG_TOKEN,
  ROUTING_LOCAL_STORAGE_KEY,
  ROUTING_STORAGE_KEYS,
} from '@store/routing/routing.tokens';
import { LocalStorageService } from '@services/local-storage.service';
import { localStorageMetaReducerFactory } from '@store/localstorage.metareducer';

const MATERIAL_MODULES = [MatSidenavModule, MatToolbarModule];

const STORE_MODULES = [
  EffectsModule.forRoot([RacesEffects]),
  StoreModule.forFeature(Feature.ROUTER, routerReducer, ROUTING_CONFIG_TOKEN),
  StoreModule.forRoot(),
  StoreRouterConnectingModule.forRoot({
    stateKey: Feature.ROUTER,
    serializer: RoutingSerializer,
    navigationActionTiming: NavigationActionTiming.PostActivation,
  }),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: false,
    autoPause: true,
    trace: true,
    traceLimit: 75,
  }),
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
    {
      provide: ROUTING_LOCAL_STORAGE_KEY,
      useValue: '__fis_scraper_routing__',
    },
    {
      provide: ROUTING_STORAGE_KEYS,
      useValue: ['state'],
    },
    {
      provide: ROUTING_CONFIG_TOKEN,
      deps: [
        ROUTING_STORAGE_KEYS,
        ROUTING_LOCAL_STORAGE_KEY,
        LocalStorageService,
      ],
      useFactory: localStorageMetaReducerFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
