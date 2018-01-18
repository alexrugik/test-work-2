import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {Note} from '../../models/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note;

  constructor() {
  }

  ngOnInit() {
  }

  parseDate(date: string) {
    return new Date(date).toUTCString();
  }

}
