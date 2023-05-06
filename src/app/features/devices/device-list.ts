import { faker } from '@faker-js/faker';
import { DeviceStatus, DeviceType } from '@features/devices/devices.model';
import { Device } from '@interfaces/device.interfaces';

export function generateDevice(): Device {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.words(2),
    deviceType: faker.helpers.arrayElement([
      DeviceType.ELTEX_DIMMER,
      DeviceType.ELTEX_MOTION,
      DeviceType.ELTEX_SOCKET,
      DeviceType.ELTEX_SZ_AIR,
      DeviceType.ELTEX_MQTT_DEVICE,
    ]),
    enabled: faker.datatype.boolean(),
    houseId: faker.datatype.uuid(),
    lastActivity: faker.date.past(),
    status: faker.helpers.arrayElement([
      DeviceStatus.ONLINE,
      DeviceStatus.OFFLINE,
      DeviceStatus.INITIALIZING,
      DeviceStatus.UNAVAILABLE,
      DeviceStatus.UNKNOWN,
    ]),
    locations: [faker.address.cityName()],
    settings: {
      port: String(faker.datatype.number(65535)),
      name: faker.lorem.word({ length: { min: 5, max: 15 } }),
      password: faker.internet.password(),
    },
  };
}

export const DeviceList: Device[] = [generateDevice()];
