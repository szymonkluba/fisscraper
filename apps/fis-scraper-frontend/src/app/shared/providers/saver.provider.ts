import { InjectionToken } from '@angular/core';

export type Saver = (blob: Blob, filename?: string) => void;

export const SAVER = new InjectionToken<Saver>('saver');

export function saverFactory(): Saver {
  return saveAs;
}

function saveAs(blob: Blob, filename?: string): void {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename || new Date().toISOString().replace(':', '');
  link.click();
  link.remove();
}
