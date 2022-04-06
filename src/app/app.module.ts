import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSortModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
