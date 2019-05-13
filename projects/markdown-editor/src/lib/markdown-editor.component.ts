import { AfterViewInit, ElementRef, Input, Output, EventEmitter, Component, ViewChild, OnInit } from '@angular/core';

const SimpleMDE: any = require('simplemde');

@Component({
  selector: 'quizetency-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: [
    './markdown-editor.component.css',
  ]
})
export class MarkdownEditorComponent implements AfterViewInit, OnInit {

  @Input() text: string;
  @Output() onTextChanged = new EventEmitter();
  @ViewChild('markdown') el: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log("Component Initialized");
  }

  ngAfterViewInit() {
    const mde = new SimpleMDE({
      autofocus: false,
      element: this.el.nativeElement,
      toolbar: false,
      forceSync: true,
      status: false,
    });

    mde.codemirror.options.extraKeys['Tab'] = false;
    mde.codemirror.options.extraKeys['Shift-Tab'] = false;

    mde.codemirror.on('focus', (e) => {
      const editorElement = (this.el.nativeElement as HTMLElement);
      const matFormFieldElement = editorElement.closest('mat-form-field');
      console.log(matFormFieldElement);
      matFormFieldElement.classList.add('mat-focused');
    });

    mde.codemirror.on('blur', () => {
      const editorElement = (this.el.nativeElement as HTMLElement);
      const matFormFieldElement = editorElement.closest('mat-form-field');
      matFormFieldElement.classList.remove('mat-focused');
      this.onTextChanged.emit(this.text);
    });

    mde.codemirror.on('change', () => {
      console.log('Something changed');
      this.text = mde.codemirror.getValue();
    });

    if (this.text) {
      mde.codemirror.setValue(this.text);
    }
  }
}
