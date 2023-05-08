import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { generateDevice } from '@features/devices/device-list';
import { Device } from '@interfaces/device.interfaces';

import { DevicesState, DevicesStore } from './devices.store';

@Injectable({ providedIn: 'root' })
export class DevicesQuery extends QueryEntity<DevicesState, Device> {
  constructor(protected override store: DevicesStore) {
    super(store);
  }

  getList() {
    return this.selectAll();
  }

  addRandomDevice() {
    const device = generateDevice();
    this.store.add(device);
  }

  addCustomDevice(device: Device) {
    this.store.add(device);
  }

  removeDevices(idList: string[]) {
    this.store.remove(idList);
  }
}
