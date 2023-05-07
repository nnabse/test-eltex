import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceRemoveDialogComponent } from '@features/devices/device-remove-dialog/device-remove-dialog.component';
import { Device } from '@interfaces/device.interfaces';

@Component({
  selector: 'device-remove-button',
  templateUrl: './device-remove.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceRemoveComponent {
  @Input() public selectedDevicesNumber = 0;
  @Input() public selectedDevices: Device[] = [];

  constructor(private readonly dialog: MatDialog) {}

  protected openRemoveDevicesDialog(): void {
    this.dialog.open(DeviceRemoveDialogComponent, {
      data: { devices: this.selectedDevices },
    });
  }
}
