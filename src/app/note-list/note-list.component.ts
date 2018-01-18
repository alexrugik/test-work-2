import {
  Component,
  OnInit
} from '@angular/core';
import {NotesService} from '../shared/services/note.service';
import {Note} from '../shared/models/note';
import {DATA_STATES} from '../app.const';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  dataStates = DATA_STATES;
  dataState: string;
  notes: Note[];


  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.setNotes();
  }

  setNotes() {
    this.dataState = DATA_STATES.LOADING;
    this.notesService.getAsyncNotes(
      (data: Note[]) => {
        this.notes = data;
        this.dataState = this.notes.length > 0 ? DATA_STATES.LOADED : DATA_STATES.EMPTY;
      },
      error => {
        this.dataState = DATA_STATES.ERROR;
        console.warn(error);
      }
    );
  }

  onSearch(noteName: string) {
    if (!noteName) {
      return;
    }
    this.setNotesByName(noteName);
  }

  setNotesByName(noteName: string) {
    this.dataState = DATA_STATES.LOADING;
    this.notesService.getAsyncNotes(
      (data: Note[]) => {
        this.notes = data.filter((note: Note) => note.title.includes(noteName));
        this.dataState = this.notes.length > 0 ? DATA_STATES.LOADED : DATA_STATES.EMPTY;
      },
      error => {
        this.dataState = DATA_STATES.ERROR;
        console.warn(error);
      }
    );
  }

}
