import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { TestModule } from './modules/test/test.module';
import { DevModule } from './modules/dev/dev.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, TestModule, DevModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
