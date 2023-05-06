import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
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
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, AfterViewInit {
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
    TableDisplayedColumns.PORT,
    TableDisplayedColumns.NAME,
    TableDisplayedColumns.PASSWORD,
  ];

  ngOnInit(): void {
    const materialTableFilter = this.tableSource.filterPredicate;
    this.tableSource.filterPredicate = (
      list: Device,
      filter: string
    ): boolean =>
      this.isTableSourceIncludesData(list, filter) ||
      materialTableFilter(list, filter);
  }

  ngAfterViewInit(): void {
    if (this.paginator) this.tableSource.paginator = this.paginator;
    if (!this.sort) return;
    this.tableSource.sortingDataAccessor = (item: Device, property) => {
      switch (property) {
        case TableDisplayedColumns.PORT:
          return item.settings.port;
        case TableDisplayedColumns.NAME:
          return item.settings.name;
        case TableDisplayedColumns.PASSWORD:
          return item.settings.password;
        default:
          return item.id;
      }
    };
    this.tableSource.sort = this.sort;
  }

  protected filterData(value: string): void {
    this.tableSource.filter = value.trim().toLowerCase();
    if (this.tableSource.paginator) this.tableSource.paginator.firstPage();
  }

  private isTableSourceIncludesData(list: Device, filter: string): boolean {
    const name =
      !filter || list.settings.name.trim().toLowerCase().includes(filter);
    const port =
      !filter || list.settings.port.trim().toLowerCase().includes(filter);
    const password =
      !filter || list.settings.password.trim().toLowerCase().includes(filter);
    return name || port || password;
  }
}
