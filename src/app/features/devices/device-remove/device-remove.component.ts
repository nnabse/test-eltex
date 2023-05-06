import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'device-remove-button',
  templateUrl: './device-remove.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceRemoveComponent {
  @Input() selectedDevicesNumber = 0;

  protected removeSelectedDevices(): void {}
}
