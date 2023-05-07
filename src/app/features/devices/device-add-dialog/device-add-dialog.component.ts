import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceStatus, DeviceType } from '@features/devices/devices.model';
import { DeviceService } from '@features/devices/services/device.service';

@Component({
  selector: 'device-add-dialog',
  templateUrl: './device-add-dialog.component.html',
  styleUrls: ['./device-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceAddDialogComponent {
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

  constructor(private readonly deviceService: DeviceService) {}

  protected createNewDevice(): void {
    const device = this.newDeviceForm.value;
    device.settings = {};
    const deviceKeys = Object.keys(device || []);

    for (let i = 0; i <= deviceKeys.length - 1; i++) {
      switch (deviceKeys[i]) {
        case 'port':
          device.settings.port = device.port;
          delete device.port;
          break;
        case 'name':
          device.settings.name = device.name;
          delete device.name;
          break;
        case 'password':
          device.settings.password = device.password;
          delete device.password;
          break;
      }
    }

    this.deviceService.addCustomDevice(device);
  }
}
