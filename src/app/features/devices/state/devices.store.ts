import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Device } from '@interfaces/device.interfaces';

export interface DevicesState extends EntityState<Device> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'devices' })
export class DevicesStore extends EntityStore<DevicesState, Device> {
  constructor() {
    super();
  }
}
