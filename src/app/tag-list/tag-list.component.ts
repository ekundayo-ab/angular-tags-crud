import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  @Input() tags: number[];
  @Output() deleteTag: EventEmitter<number> = new EventEmitter();
  constructor() { }

  setTagToDelete(tag) {
    this.deleteTag.emit(tag);
  }

}
