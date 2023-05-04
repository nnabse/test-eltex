import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-devices',
  templateUrl: './devices.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesComponent {}
