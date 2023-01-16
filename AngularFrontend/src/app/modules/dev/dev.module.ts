import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { MaterialModule } from '../../../material.module';



@NgModule({
  declarations: [
    AdDirective,
    AdBannerComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    AdBannerComponent
  ]
})
export class DevModule { }
