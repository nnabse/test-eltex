import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceStatus, DeviceType } from '@features/devices/devices.model';

@Component({
  selector: 'device-create-dialog',
  templateUrl: './device-create-dialog.component.html',
  styleUrls: ['./device-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceCreateDialogComponent {
  protected readonly maxDate = new Date();
  protected readonly deviceType = DeviceType;
  protected readonly deviceStatus = DeviceStatus;
  protected readonly newDeviceForm: FormGroup = new FormGroup({
    id: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    deviceType: new FormControl(null, Validators.required),
    enabled: new FormControl(true, Validators.required),
    houseId: new FormControl(null, Validators.required),
    lastActivity: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    locations: new FormControl(null, Validators.required),
    port: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
}
