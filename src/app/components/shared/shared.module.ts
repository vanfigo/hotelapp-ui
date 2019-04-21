import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { SelectBedComponent } from './bed/select/select.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    NavbarComponent,
    LoadingComponent,
    SelectBedComponent,
    UploadComponent
  ],
  exports: [
    NavbarComponent,
    LoadingComponent,
    SelectBedComponent,
    UploadComponent
  ]
})
export class SharedModule { }
