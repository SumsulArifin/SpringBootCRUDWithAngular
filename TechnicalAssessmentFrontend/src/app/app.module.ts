import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { DepartmentCreateComponent } from './Pages/department-create/department-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCreateComponent } from './Pages/employee-create/employee-create.component';
import { DepartmentEditComponent } from './Pages/department-edit/department-edit.component';
import { EmployeeEditComponent } from './Pages/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    EmployeeComponent,
    DepartmentComponent,
    DepartmentCreateComponent,
    EmployeeCreateComponent,
    DepartmentEditComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
