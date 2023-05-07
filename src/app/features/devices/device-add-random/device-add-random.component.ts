import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeviceService } from '@features/devices/services/device.service';

@Component({
  selector: 'device-add-random',
  templateUrl: './device-add-random.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceAddRandomComponent {
  constructor(private readonly deviceService: DeviceService) {}

  protected createRandomDevice(): void {
    this.deviceService.addDevice();
  }
}
