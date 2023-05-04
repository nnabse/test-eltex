import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devices-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {}
