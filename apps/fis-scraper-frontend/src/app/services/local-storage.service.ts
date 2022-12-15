import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(state: T, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  getItem<T>(localStorageKey: string): T|null {
    const state = localStorage.getItem(localStorageKey);

    return state ? JSON.parse(state) as T : null
  }
}
