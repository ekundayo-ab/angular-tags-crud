import { Component, OnInit } from '@angular/core';
import { tagsToString, stripAndFilterTags, defaultTags } from './definitions';

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
    } else {
      this.tags = stripAndFilterTags(defaultTags);
    }
  }

  editTags() {
    this.openModal();
    this.editMode = true;
  }

  addTags(tags: number[]) {
    let tagsToAdd = this.tags;
    tagsToAdd = tagsToAdd.concat(tags);

    const tagsInHash = {};

    tagsToAdd.forEach((tag) => {
      tagsInHash[`tag-${tag}`] = tag;
    });
    this.tags = Object.values(tagsInHash);

    this.persistToLS();

    if (this.editMode) {
      this.closeModal();
      this.editMode = false;
    }
  }

  deleteTag(tagToDelete: number) {
    this.tags = this.tags.filter(tag => tag !== tagToDelete);
    this.persistToLS();
  }

  closeModal() {
    this.modalIsActive = false;
  }

  openModal() {
    this.modalIsActive = true;
  }

  persistToLS() {
    localStorage.setItem('tags', tagsToString(this.tags));
  }
}
