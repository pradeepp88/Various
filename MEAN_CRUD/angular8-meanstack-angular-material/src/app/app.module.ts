import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddStudentComponent } from '../components/add-student/add-student.component';
import { EditStudentComponent } from '../components/edit-student/edit-student.component';
import { StudentsListComponent } from '../components/students-list/students-list.component';
import { AppRoutingModuleModule } from '../app-routing-module.module';
/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';

import { HttpClientModule } from '@angular/common/http';
/* Angular 8 CRUD services */
import { ApiService } from '../shared/api.service';
/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModuleModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
