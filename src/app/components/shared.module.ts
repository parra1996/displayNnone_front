import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { TitleComponent } from './title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TableComponent } from './table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SpinnerComponent, TitleComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  exports: [
    SpinnerComponent,
    TitleComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    TableComponent,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
