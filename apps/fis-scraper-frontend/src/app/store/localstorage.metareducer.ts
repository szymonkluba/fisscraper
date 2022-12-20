import { Action, ActionReducer } from '@ngrx/store';
import { LocalStorageService } from '@services/local-storage.service';

function hasProp<T>(
  object: T,
  prop: string | number | symbol
): prop is keyof T {
  return Object.keys(object as object).includes(String(prop));
}

function getSelectedProps<T>(object: T, keys: string[]): Partial<T> {
  if (!object) return {};

  return keys.reduce((finalObject: Partial<T>, currentKey: string) => {
    if (hasProp<T>(object, currentKey)) {
      finalObject[currentKey] = object[currentKey];
    }

    return finalObject;
  }, {});
}

export function localstorageMetaReducer<S, A extends Action = Action>(
  saveKeys: string[],
  localStorageKey: string,
  localStorageService: LocalStorageService
) {
  let initial = true;
  return function (reducer: ActionReducer<S, A>) {
    return function (state: S, action: A): S {
      const nextState = reducer(state, action);

      if (initial) {
        initial = false;
        const savedState =
          localStorageService.getItem<Partial<S>>(localStorageKey);

        if (savedState) {
          return { ...nextState, ...savedState };
        }
        return nextState;
      }

      const stateToSave = getSelectedProps(nextState, saveKeys);
      localStorageService.setItem<Partial<S>>(stateToSave, localStorageKey);

      return nextState;
    };
  };
}

export function localStorageMetaReducerFactory(
  saveKeys: string[],
  localStorageKey: string,
  localStorageService: LocalStorageService
) {
  return {
    metaReducers: [
      localstorageMetaReducer(saveKeys, localStorageKey, localStorageService),
    ],
  };
}
