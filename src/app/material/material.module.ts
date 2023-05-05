import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

export const MaterialModules = [
  MatInputModule,
  MatToolbarModule,
  MatExpansionModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
];

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule {}
