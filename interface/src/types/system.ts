import type { busConnectionStatus } from 'app/main/types';

import type { NetworkConnectionStatus } from './network';

export interface SystemStatus {
  emsesp_version: string;
  bus_status: busConnectionStatus;
  uptime: number;
  bus_uptime: number;
  num_devices: number;
  num_sensors: number;
  num_analogs: number;
  ntp_status: number;
  mqtt_status: boolean;
  ap_status: boolean;
  network_status: NetworkConnectionStatus;
  wifi_rssi: number;
  build_flags: string;
  esp_platform: string;
  max_alloc_heap: number;
  cpu_type: string;
  cpu_rev: number;
  cpu_cores: number;
  cpu_freq_mhz: number;
  free_heap: number;
  arduino_version: string;
  sdk_version: string;
  partition: string;
  flash_chip_size: number;
  flash_chip_speed: number;
  app_used: number;
  app_free: number;
  fs_used: number;
  fs_free: number;
  free_mem: number;
  psram: boolean;
  psram_size?: number;
  free_psram?: number;
  free_caps: number;
  model: string;
  has_loader: boolean;
  has_partition: boolean;
  status: string;
  temperature?: number;
}

export enum LogLevel {
  ERROR = 3,
  WARNING = 4,
  NOTICE = 5,
  INFO = 6,
  DEBUG = 7,
  TRACE = 8,
  ALL = 9
}

export interface LogEntry {
  t: string;
  l: LogLevel;
  i: number;
  n: string;
  m: string;
}

export interface LogSettings {
  level: number;
  max_messages: number;
  compact: boolean;
  psram: boolean;
  developer_mode: boolean;
}
