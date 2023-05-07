import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RemoveDialogData } from '@features/devices/device-remove-dialog/device-remove-dialog.model';
import { DeviceService } from '@features/devices/services/device.service';

@Component({
  selector: 'device-remove-dialog',
  templateUrl: './device-remove-dialog.component.html',
  styleUrls: ['./device-remove-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceRemoveDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) protected readonly data: RemoveDialogData,
    private readonly deviceService: DeviceService
  ) {}

  protected removeDevices(): void {
    const idList: string[] = [];
    for (let i = 0; i <= this.data.devices.length - 1; i++) {
      idList.push(this.data.devices[i].id);
    }
    this.deviceService.removeDevices(idList);
  }
}
