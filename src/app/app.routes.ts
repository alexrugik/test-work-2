import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NoteAddComponent} from './note-add/note-add.component';
import {NoteListComponent} from './note-list/note-list.component';
import {NoteDetailsComponent} from './note-details/note-details.component';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {PATHS} from './app.const';

export const appRoutes: Routes = [
  {path: PATHS.HOME, component: HomeComponent},
  {path: PATHS.NOTE_ADD, component: NoteAddComponent},
  {path: PATHS.NOTE_LIST, component: NoteListComponent},
  {path: PATHS.NOTE_DETAILS, component: NoteDetailsComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

