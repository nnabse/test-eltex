import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModules } from '@app/material/material.module';
import { DevicesRoutingModule } from '@features/devices/devices-routing.module';
import { DevicesComponent } from '@features/devices/devices.component';
import { FilterComponent } from '@features/devices/filter/filter.component';
import { TableComponent } from '@features/devices/table/table.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [DevicesComponent, FilterComponent, TableComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    RouterModule,
    MaterialModules,
    SharedModule,
  ],
})
export class DevicesModule {}
