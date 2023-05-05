export enum DeviceType {
  ELTEX_MQTT_DEVICE = 'ELTEX_MQTT_DEVICE',
  ELTEX_MOTION = 'ELTEX_MOTION',
  ELTEX_SOCKET = 'ELTEX_SOCKET',
  ELTEX_SZ_AIR = 'ELTEX_SZ_AIR',
  ELTEX_DIMMER = 'ELTEX_DIMMER',
}

export enum DeviceStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  UNAVAILABLE = 'UNAVAILABLE',
  INITIALIZING = 'INITIALIZING',
  UNKNOWN = 'UNKNOWN',
}
