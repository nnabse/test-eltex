import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DevicesRoutingModule } from '@features/devices/devices-routing.module';
import { DevicesComponent } from '@features/devices/devices.component';
import { FilterComponent } from '@features/devices/filter/filter.component';
import { ListComponent } from '@features/devices/list/list.component';

@NgModule({
  declarations: [ListComponent, DevicesComponent, FilterComponent],
  imports: [CommonModule, DevicesRoutingModule, RouterModule],
})
export class DevicesModule {}
