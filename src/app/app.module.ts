import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetProjectsComponent } from './Project/get-projects/get-projects.component';
import { SaveProjectComponent } from './Project/save-project/save-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    GetProjectsComponent,
    SaveProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
