import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceCreateDialogComponent } from '@features/devices/device-create-dialog/device-create-dialog.component';

@Component({
  selector: 'device-add-custom',
  templateUrl: './device-add-custom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceAddCustomComponent {
  constructor(protected readonly dialog: MatDialog) {}

  protected openDialog(): void {
    this.dialog.open(DeviceCreateDialogComponent, {
      width: '50%',
    });
  }
}
