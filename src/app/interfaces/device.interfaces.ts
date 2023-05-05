export interface Device {
  id: string;
  title: string;
  deviceType:
    | 'ELTEX_MQTT_DEVICE'
    | 'ELTEX_MOTION'
    | 'ELTEX_SOCKET'
    | 'ELTEX_SZ_AIR'
    | 'ELTEX_DIMMER';
  enabled: boolean;
  houseId: string;
  lastActivity: number;
  status: 'ONLINE' | 'OFFLINE' | 'UNAVAILABLE' | 'INITIALIZING' | 'UNKNOWN';
  locations: string[];
  settings: DeviceSettings;
}

interface DeviceSettings {
  port: string;
  name: string;
  password: string;
}
