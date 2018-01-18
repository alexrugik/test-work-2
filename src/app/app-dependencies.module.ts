import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    AsyncLocalStorageModule,
    AngularFontAwesomeModule
  ],
  exports: [
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    BrowserModule,
    AsyncLocalStorageModule,
    AngularFontAwesomeModule
  ]
})
export class DependenciesModule {
}
