import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-master',
  standalone: false,
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  @ContentChild('banner', { static: false, read: ElementRef }) bannerContent?: ElementRef;
  hasBanner = false;

  ngAfterContentInit() {
    this.hasBanner = !!this.bannerContent;
  }
}
