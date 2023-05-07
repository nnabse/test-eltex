import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableDisplayedColumns } from '@features/devices/table/table.model';
import { Device } from '@interfaces/device.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'devices-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  protected readonly tableSource = new MatTableDataSource<Device>([]);
  protected selection = new SelectionModel<Device>(true, []);
  protected readonly displayedColumns: TableDisplayedColumns[] = [
    TableDisplayedColumns.SELECT,
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
  protected checkedDevicesNumber = 0;
  protected checkedDevices: Device[] = [];
  private checkboxSubscription = Subscription.EMPTY;

  ngOnInit(): void {
    const materialTableFilter = this.tableSource.filterPredicate;
    this.tableSource.filterPredicate = (
      list: Device,
      filter: string
    ): boolean =>
      this.isTableSourceIncludesData(list, filter) ||
      materialTableFilter(list, filter);

    this.checkboxSubscribe();
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
          return String(item[property as keyof Device]);
      }
    };
    this.tableSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.checkboxSubscription.unsubscribe();
  }

  protected isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableSource.data.length;
    return numSelected === numRows;
  }

  protected toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.tableSource.data);
  }

  protected checkboxLabel(row?: Device): string {
    if (!row) return `${this.isAllSelected() ? 'deselect' : 'select'} all`;

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row${
      row.id + 1
    }`;
  }

  protected filterData(value: string): void {
    this.tableSource.filter = value.trim().toLowerCase();
    if (this.tableSource.paginator) this.tableSource.paginator.firstPage();
  }

  private checkboxSubscribe(): void {
    this.checkboxSubscription = this.selection.changed.subscribe((change) => {
      this.checkedDevices = change.source.selected;
      this.checkedDevicesNumber = this.checkedDevices.length;
    });
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
