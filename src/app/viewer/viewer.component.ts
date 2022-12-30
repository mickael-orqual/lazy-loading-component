import { Component, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { BaseViewerComponent } from '../base-viewer/base-viewer.component';

type FileType = 'Video' | 'Image';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  
  @Input() file!: string;

  componentByViewer: Record<FileType, () => Promise<Type<BaseViewerComponent>>> = {
    Image: async () => {
      const { ImageComponent } = await import('../image/image.component');
      return ImageComponent;
    },
    Video: async () => {
      const { VideoComponent } = await import('../video/video.component');
      return VideoComponent;
    }
  }
  constructor(private readonly viewContainerRef: ViewContainerRef) { }
  
  
  
  ngOnInit(): void {}

  async loadViewer(): Promise<void> {
    const fileType = this.getFileType();
    const viewer = await this.componentByViewer[fileType]();
    const componentRef = this.viewContainerRef.createComponent(viewer);
    componentRef.instance.file = this.file;
  }

  private getFileType(): FileType {
    const indexOfExtension = this.file.lastIndexOf('.');
    const extension = this.file.substring(indexOfExtension);
    console.log(extension);
    
    if (extension.includes('jpg')) {
      return 'Image';
    }
    else if (extension.includes('mp4')) {
      return 'Video'
    }
    throw new Error('Extension non supporté');

  }



}
