import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { defaultTags, stripAndFilterTags } from '../definitions';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {
  @Input() tagsToEdit = '';
  @Input() editMode = false;

  @Output() addTags: EventEmitter<number[]> = new EventEmitter();

  tagForm = new FormGroup({
    tags: new FormControl(this.tagsToEdit)
  });

  constructor() { }

  ngOnInit() {
    if (this.editMode) {
      this.tagForm.setValue({
        tags: this.tagsToEdit.length ? this.tagsToEdit : defaultTags
      });
    }
  }

  onSubmit() {
    const { tags } = this.tagForm.value;

    if (!tags) {
      return;
    }

    const filteredTags = stripAndFilterTags(tags);

    this.addTags.emit(filteredTags);

    this.tagForm.setValue({ tags: '' });
  }

}
