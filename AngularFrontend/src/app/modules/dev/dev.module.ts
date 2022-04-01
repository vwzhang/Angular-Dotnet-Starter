import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';



@NgModule({
  declarations: [
    AdDirective,
    AdBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdBannerComponent
  ]
})
export class DevModule { }
