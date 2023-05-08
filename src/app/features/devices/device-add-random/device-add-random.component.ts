import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DevicesService } from '@features/devices/state/devices.service';

@Component({
  selector: 'device-add-random',
  templateUrl: './device-add-random.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceAddRandomComponent {
  constructor(private readonly devicesService: DevicesService) {}

  protected createRandomDevice(): void {
    this.devicesService.addRandomDevice();
  }
}
