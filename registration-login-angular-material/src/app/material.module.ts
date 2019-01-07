import { NgModule } from  '@angular/core';
 
import {MatNativeDateModule,MatIconModule,MatCheckboxModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,MatButtonModule,MatToolbarModule} from  '@angular/material';
import { MatDatepickerModule } from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule,  ReactiveFormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,MatButtonModule,MatToolbarModule],
exports: [MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatCheckboxModule, MatCardModule,MatFormFieldModule, ReactiveFormsModule,MatInputModule,MatListModule,MatRadioModule,MatButtonModule,MatToolbarModule],
 
})
 
export  class  MyMaterialModule { }