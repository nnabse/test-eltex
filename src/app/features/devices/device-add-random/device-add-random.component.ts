import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'device-add-random',
  templateUrl: './device-add-random.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceAddRandomComponent {
  protected createRandomDevice(): void {}
}
