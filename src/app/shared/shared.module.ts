import {NgModule} from '@angular/core';

import {DependenciesModule} from '../app-dependencies.module';

import {NotesService} from './services/note.service';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {NoteCardComponent} from './components/note-card/note-card.component';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  providers: [NotesService],
  imports: [DependenciesModule],
  exports: [
    NoteCardComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  declarations: [
    NoteCardComponent,
    PageNotFoundComponent,
    HeaderComponent
  ]
})
export class SharedModule {
}
