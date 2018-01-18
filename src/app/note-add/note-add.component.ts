import {Component, OnInit} from '@angular/core';
import {Note} from '../shared/models/note';
import {NotesService} from '../shared/services/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  private note = {};

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
  }

  private resetNoteData() {
    Object.keys(this.note).forEach((key: string) => this.note[key] = '');
  }

  onAddNote(noteName: string,
            noteDescription: string,
            noteKeyWords: string,
            createdAt: string) {
    const note: Note = new Note(noteName, noteDescription, noteKeyWords, createdAt);
    this.notesService.addNote(note);
    this.resetNoteData();
  }

  onResetNote() {
    this.resetNoteData();
  }
}
