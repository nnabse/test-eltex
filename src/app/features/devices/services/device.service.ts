import { DialogModule } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { DeviceList, generateDevice } from '@features/devices/device-list';
import { LocalStorage } from '@features/devices/enums/localStorage.enums';
import { Device } from '@interfaces/device.interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: DialogModule,
})
export class DeviceService {
  public deviceList = new BehaviorSubject<Device[]>([]);

  constructor() {
    let localStorageDeviceList = localStorage.getItem(LocalStorage.DEVICE_LIST);
    if (localStorageDeviceList) {
      const list = JSON.parse(localStorageDeviceList);
      this.deviceList.next(list);
    } else {
      this.deviceList.next(DeviceList);
    }
  }

  public addDevice(): void {
    const newDevice: Device = generateDevice();
    this.deviceList.next([...this.deviceList.value, newDevice]);
  }

  public addCustomDevice(device: Device): void {
    this.deviceList.next([...this.deviceList.value, device]);
  }

  public removeDevices(idList: string[]): void {
    this.deviceList.next(
      this.deviceList.value.filter((device) => !idList.includes(device.id))
    );
  }
}
