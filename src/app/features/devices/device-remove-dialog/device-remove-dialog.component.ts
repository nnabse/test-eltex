import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RemoveDialogData } from '@features/devices/device-remove-dialog/device-remove-dialog.model';
import { DevicesService } from '@features/devices/state/devices.service';

@Component({
  selector: 'device-remove-dialog',
  templateUrl: './device-remove-dialog.component.html',
  styleUrls: ['./device-remove-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceRemoveDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) protected readonly data: RemoveDialogData,
    private readonly devicesService: DevicesService
  ) {}

  protected removeDevices(): void {
    const idList: string[] = [];
    for (let i = 0; i <= this.data.devices.length - 1; i++) {
      idList.push(this.data.devices[i].id);
    }

    this.devicesService.removeDevices(idList);
  }
}
