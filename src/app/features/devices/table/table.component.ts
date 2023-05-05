import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devices-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  protected tableSource: unknown[] = [];
  protected readonly displayedColumns: string[] = [];

  protected filterData(value: string): void {}
}
