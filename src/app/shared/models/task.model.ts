export class Task {
  id: number;
  timestamp: string;
  title: string;
  type: string;
  note: string;

  constructor(
    note: string = "",
    type: string = "",
    title: string = "",
    timestamp: string = "",
    id: number = 0 // Default to 0 for consistency with other ID defaults
  ) {
    this.note = note;
    this.type = type;
    this.title = title;
    this.timestamp = timestamp;
    this.id = id;
  }
}
