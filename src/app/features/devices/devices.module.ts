import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModules } from '@app/material/material.module';
import { DeviceAddCustomComponent } from '@features/devices/device-add-custom/device-add-custom.component';
import { DeviceAddDialogComponent } from '@features/devices/device-add-dialog/device-add-dialog.component';
import { DeviceAddRandomComponent } from '@features/devices/device-add-random/device-add-random.component';
import { DeviceRemoveComponent } from '@features/devices/device-remove/device-remove.component';
import { DeviceRemoveDialogComponent } from '@features/devices/device-remove-dialog/device-remove-dialog.component';
import { DevicesRoutingModule } from '@features/devices/devices-routing.module';
import { DevicesComponent } from '@features/devices/devices.component';
import { FilterComponent } from '@features/devices/filter/filter.component';
import { TableComponent } from '@features/devices/table/table.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    DevicesComponent,
    FilterComponent,
    TableComponent,
    DeviceRemoveComponent,
    DeviceAddDialogComponent,
    DeviceAddCustomComponent,
    DeviceAddRandomComponent,
    DeviceRemoveDialogComponent,
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    RouterModule,
    MaterialModules,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DevicesModule {}
