import {Injectable} from '@angular/core';
import {Note} from '../models/note';
import {AsyncLocalStorage} from 'angular-async-local-storage';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

const KEY = 'appNotes';

@Injectable()
export class NotesService {
  notes: Note[] = [];

  constructor(protected localStorage: AsyncLocalStorage) {
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.updateLocalStorage();
  }

  getAsyncNotes(doneCallback, errorCallback) {
    return this.localStorage.getItem(KEY)
      .debounceTime(500)
      .subscribe(doneCallback, errorCallback);
  }

  getAsyncNoteById(id, doneCallback, errorCallback) {
    return this.localStorage.getItem(KEY)
      .map(data => {
        return data.filter((note: Note) => note.id === id);
      })
      .flatMap(data => data)
      .subscribe(doneCallback, errorCallback);
  }

  getNotes(): Note[] {
    return this.notes;
  }

  updateLocalStorage() {
    this.localStorage.setItem(KEY, this.getNotes())
      .subscribe((done) => {
        console.log(done);
      }, (error) => {
        console.warn(error);
      });
  }
}
