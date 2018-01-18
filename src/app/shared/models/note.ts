export class Note {
  static id = 0;
  public id: number;

  constructor(public title: string,
              public description: string,
              public keyWords: string,
              public createdAt: string) {
    this.id = Note.id;
    Note.id++;
  }
}
