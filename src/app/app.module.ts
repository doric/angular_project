import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ConvertToListPipe } from './convert-to-list.pipe';
import { UserRatingComponent } from '../../shared/user-rating/user-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConvertToListPipe,
    UserRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
