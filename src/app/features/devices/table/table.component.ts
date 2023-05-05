import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableDisplayedColumns } from '@features/devices/table/table.model';
import { Device } from '@interfaces/device.interfaces';

@Component({
  selector: 'devices-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  protected tableSource: Device[] = [];
  protected readonly displayedColumns: TableDisplayedColumns[] = [
    TableDisplayedColumns.ID,
    TableDisplayedColumns.TITLE,
    TableDisplayedColumns.DEVICE_TYPE,
    TableDisplayedColumns.ENABLED,
    TableDisplayedColumns.HOUSE_ID,
    TableDisplayedColumns.LAST_ACTIVITY,
    TableDisplayedColumns.STATUS,
  ];

  protected filterData(value: string): void {}
}
