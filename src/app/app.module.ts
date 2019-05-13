import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MarkdownEditorModule } from 'dist/markdown-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
