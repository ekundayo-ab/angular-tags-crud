import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TagFormComponent } from './tag-form/tag-form.component';
import { TagListComponent } from './tag-list/tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TagFormComponent,
    TagListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
