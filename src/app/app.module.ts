import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NoteListComponent} from './note-list/note-list.component';
import {NoteDetailsComponent} from './note-details/note-details.component';
import {NoteAddComponent} from './note-add/note-add.component';

import {appRoutes} from './app.routes';

import {DependenciesModule} from './app-dependencies.module';
import {SharedModule} from './shared/shared.module';

import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteListComponent,
    NoteDetailsComponent,
    NoteAddComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    SharedModule,
    DependenciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
