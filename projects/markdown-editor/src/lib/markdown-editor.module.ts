import { NgModule } from '@angular/core';
import { MarkdownEditorComponent } from './markdown-editor.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ MarkdownEditorComponent ],
  imports: [
    MatInputModule,
    FormsModule,
  ],
  exports: [ MarkdownEditorComponent ]
})
export class MarkdownEditorModule { }
