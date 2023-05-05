import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesComponent {}
