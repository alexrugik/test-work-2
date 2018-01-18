import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotesService} from '../shared/services/note.service';
import {Note} from '../shared/models/note';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit, OnDestroy {
  private routeSubscription: any;
  public note: Note;

  constructor(private notesService: NotesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.setNote(Number.parseInt(params.id));
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  setNote(noteId: number) {
    this.notesService.getAsyncNoteById(noteId,
      (data: Note) => {
        this.note = data;
      },
      error => {
        console.warn(error);
      });
  }

}
