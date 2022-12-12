import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setSavedState(state: unknown, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  getSavedState(localStorageKey: string): unknown {
    const state = localStorage.getItem(localStorageKey);

    if (state) {
      return JSON.parse(state);
    }

    return;
  }
}
