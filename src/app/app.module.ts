import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, Ng2BootstrapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
