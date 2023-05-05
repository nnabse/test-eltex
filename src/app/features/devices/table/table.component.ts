import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableDisplayedColumns } from '@features/devices/table/table.model';
import { Device } from '@interfaces/device.interfaces';

@Component({
  selector: 'devices-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  protected tableSource = new MatTableDataSource<Device>([]);
  protected readonly displayedColumns: TableDisplayedColumns[] = [
    TableDisplayedColumns.ID,
    TableDisplayedColumns.TITLE,
    TableDisplayedColumns.DEVICE_TYPE,
    TableDisplayedColumns.ENABLED,
    TableDisplayedColumns.HOUSE_ID,
    TableDisplayedColumns.LAST_ACTIVITY,
    TableDisplayedColumns.STATUS,
    TableDisplayedColumns.LOCATIONS,
  ];

  ngAfterViewInit() {
    if (this.sort) this.tableSource.sort = this.sort;
    if (this.paginator) this.tableSource.paginator = this.paginator;
  }

  protected filterData(value: string): void {}
}
