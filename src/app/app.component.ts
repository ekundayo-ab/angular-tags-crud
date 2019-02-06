import { Component, OnInit } from '@angular/core';
import { tagsToString, stripAndFilterTags } from './definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalIsActive = false;
  editMode = false;

  tags: number[] = [];
  tagsToString = tagsToString;

  ngOnInit() {
    const tagsInLS = localStorage.getItem('tags');
    if (tagsInLS) {
      this.tags = stripAndFilterTags(tagsInLS);
    }
  }

  editTags() {
    this.openModal();
    this.editMode = true;
  }

  addTags(tags: number[]) {
    this.tags = tags;

    localStorage.setItem('tags', tagsToString(tags));

    if (this.modalIsActive) {
      this.closeModal();
    }
  }

  closeModal() {
    this.modalIsActive = false;
  }

  openModal() {
    this.modalIsActive = true;
  }
}
