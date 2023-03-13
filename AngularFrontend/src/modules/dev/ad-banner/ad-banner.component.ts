import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdItem } from '../classes/ad-item';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  interval: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }
}
