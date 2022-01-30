import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";

import { filesReducer } from "./state/files.reducer";
import { foldersReducer } from "./state/folders.reducer";
import { folderContentReducer } from "./state/folderContents.reducer";

import { getSaver, SAVER } from "./providers/saver.provider";
import { NotificationsModule } from "./notifications/notifications.module";
import { notificationsReducer } from "./state/notifications.reducer";
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from "@angular/material/tooltip";
import { spinnerReducer } from "./state/spinner.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NotificationsModule,
    StoreModule.forRoot({
      files: filesReducer,
      folders: foldersReducer,
      folderContents: folderContentReducer,
      notifications: notificationsReducer,
      spinner: spinnerReducer
    }, {})
  ],
  providers: [
    { provide: SAVER,
      useFactory: getSaver
    },
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        showDelay: 500,
        hideDelay: 200,
        touchendHideDelay: 200,
        position: "after"
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
