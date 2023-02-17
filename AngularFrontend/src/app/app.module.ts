import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { TestModule } from './modules/test/test.module';
import { DevModule } from './modules/dev/dev.module';
import { TodoListModule } from './modules/todo-list/todo-list.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { DevelopmentComponent } from './development/development.component';
import { FormsModule } from '@angular/forms';
import { ChatgptUiComponent } from './chatgpt-ui/chatgpt-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DevelopmentComponent,
    ChatgptUiComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, FormsModule,
    MaterialModule,
    TestModule, DevModule, TodoListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
