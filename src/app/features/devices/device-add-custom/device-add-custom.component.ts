import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceAddDialogComponent } from '@features/devices/device-add-dialog/device-add-dialog.component';

@Component({
  selector: 'device-add-custom',
  templateUrl: './device-add-custom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceAddCustomComponent {
  constructor(protected readonly dialog: MatDialog) {}

  protected openDialog(): void {
    this.dialog.open(DeviceAddDialogComponent, {
      width: '50%',
    });
  }
}
