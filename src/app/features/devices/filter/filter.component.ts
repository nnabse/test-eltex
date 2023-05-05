import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'devices-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  @Output() protected filterDataEvent = new EventEmitter<string>();

  protected filterData(value: string): void {
    this.filterDataEvent.emit(value);
  }
}
