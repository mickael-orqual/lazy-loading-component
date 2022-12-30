import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-viewer',
  template: '',
})
export abstract  class BaseViewerComponent implements OnInit {

  @Input() file!: string;

  ngOnInit(): void {
  }

}
