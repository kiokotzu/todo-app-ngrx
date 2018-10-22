import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoFooterComponent } from './todo/footer/footer.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
import { appReducers } from '../store/app.reducers';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoFooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
