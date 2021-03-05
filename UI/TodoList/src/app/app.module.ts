import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import * as _ from 'lodash';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateOrUpdateItemComponent } from './create-or-update-item/create-or-update-item.component';
import { GetListComponent } from './get-list/get-list.component';
import { TodoService } from './todo.service';
import { YesNOPipe } from './yes-no.pipe';
import { FormsModule } from '@angular/forms';

//const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateOrUpdateItemComponent,
    GetListComponent,
    YesNOPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
