import { Component, OnInit } from '@angular/core';
import { BaseViewerComponent } from '../base-viewer/base-viewer.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent extends BaseViewerComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}
