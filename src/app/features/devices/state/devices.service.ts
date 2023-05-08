import { Injectable } from '@angular/core';
import { Device } from '@interfaces/device.interfaces';

import { DevicesQuery } from './devices.query';

@Injectable({ providedIn: 'root' })
export class DevicesService {
  constructor(private devicesQuery: DevicesQuery) {}

  isInitialized() {
    const isInitialized = localStorage.getItem('isInitialized');
    if (isInitialized) return;

    this.devicesQuery.addRandomDevice();
    localStorage.setItem('isInitialized', 'true');
  }

  getDeviceList() {
    return this.devicesQuery.getList();
  }

  addRandomDevice() {
    return this.devicesQuery.addRandomDevice();
  }

  addCustomDevice(device: Device) {
    return this.devicesQuery.addCustomDevice(device);
  }

  removeDevices(idList: string[]) {
    return this.devicesQuery.removeDevices(idList);
  }
}
