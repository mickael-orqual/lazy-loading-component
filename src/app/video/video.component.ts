import { Component, OnInit } from '@angular/core';
import { BaseViewerComponent } from '../base-viewer/base-viewer.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent extends BaseViewerComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(): void {}

}
