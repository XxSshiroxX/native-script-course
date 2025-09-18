// Configuración de la URL base de la API (puede ser cambiada por el usuario en Settings)
import { getString, setString, hasKey } from '@nativescript/core/application-settings';

const API_URL_KEY = 'API_URL';
const DEFAULT_API_URL = 'https://tjspsr7m-3000.use2.devtunnels.ms'; // Cambia esto por tu URL de ngrok si es necesario

export function getApiUrl(): string {
  return hasKey(API_URL_KEY) ? getString(API_URL_KEY) : DEFAULT_API_URL;
}

export function setApiUrl(url: string) {
  setString(API_URL_KEY, url);
}
