import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { MaterialModule } from '../../../material.module';
import { MaterialInputComponent } from './material-input/material-input.component';



@NgModule({
  declarations: [
    AdDirective,
    AdBannerComponent,
    MaterialInputComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    AdBannerComponent, MaterialInputComponent
  ]
})
export class DevModule { }
